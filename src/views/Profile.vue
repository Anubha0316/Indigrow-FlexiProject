<template>
    <v-app id="app" class="mt-0">
        <v-container grid-list-xl>
            <Navbar></Navbar>
            <div class="profile-container">
                <div class="profile-image">
                    <ImageInput v-model="avatar" class="avatar">
                        <div class="avatar-circle" slot="activator">
                            <v-avatar size="300px" v-ripple v-if="!avatar" class="grey lighten-3 mb-3">
                                <span>Click to add avatar</span>
                            </v-avatar>
                            <v-avatar size="150px" v-ripple v-else class="mb-3">
                                <img :src="avatar.imageURL" alt="avatar" />
                            </v-avatar>
                        </div>
                    </ImageInput>
                </div>
                <div class="profile-text">
                    <h1>{{ name }}</h1>

                    <div class="profile-info">
                        <div class="stats">
                            <div class="stats-count">{{ post }}</div>
                            <div class="stats-label">Posts</div>
                        </div>
                        <div class="stats">
                            <div class="stats-count">{{ followers }}</div>
                            <div class="stats-label">Followers</div>
                        </div>
                        <div class="stats">
                            <div class="stats-count">{{ following }}</div>
                            <div class="stats-label">Following</div>
                        </div>
                    </div>
                    <div>
                        <div class="bio">{{ bio }}</div>
                    </div>
                </div>

            </div>
            <div class="post-form-container">
                <PostForm @increment="postAdded()"></PostForm>
            </div>
            <div class="post-list-container">
                <PostList></PostList>
            </div>
        </v-container>
    </v-app>
</template>
  
<script>
import ImageInput from "@/components/ImageInput.vue";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
    name: "profile",
    data() {
        return {
            avatar: null,
            saving: false,
            saved: false,
            name: "Anubha Gupta",
            followers: 0,
            following: 0,
            post: 0,
            bio: "Hi, Add a bio!"
        };
    },
    components: { ImageInput, PostForm, PostList },
    watch: {
        avatar: {
            handler: function () {
                this.saved = false;
            },
            deep: true,
        },
    },
    methods: {
        uploadImage() {
            this.saving = true;
            setTimeout(() => this.savedAvatar(), 1000);
        },
        savedAvatar() {
            this.saving = false;
            this.saved = true;
        },
        postAdded() {
            console.log("Incrementing");
            this.post++
        }
    },
};
</script>
  
<style>
@import url("@/assets/styles.css");
</style>