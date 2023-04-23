<template>
    <form class="post-form" @submit.prevent="onSubmit">
        <h3>Create a post</h3>
        <textarea id="body" v-model="bodyModel"></textarea>
        <input class="button" type="submit" value="Post" @click="incrementPosts()" />
    </form>
</template>
  
<script>
import Profile from '../views/Profile.vue'
import postService from './../assets/post';
export default {
    name: "post-form",
    data() {
        return {
            body: '',
            date: ''
        }
    },
    methods:
    {
        onSubmit() {
            if (this.body == '') {
                alert('Please type something to post')
                return
            }
            const current = new Date();
            const dateNow = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()} - ${current.getSeconds() + " secs ago"}`;

            let myPost = {
                body: this.body,
                date: dateNow
            }

            this.$emit('post-submitted', myPost)
            console.log(this.body, "before")
            this.body = ''
            console.log(this.body, 'after')
        },
        incrementPosts() {
            console.log("sending");
            this.$emit('increment')
        }
    },
    mounted() {
        this.$on('post-submitted', (post) => {
            postService.addPost(post);
            console.log(postService.getPosts(), "naman")
        });
    },
    computed: {
        bodyModel: {
            get() {
                return this.body
            },
            set(value) {
                this.body = value
            }
        }
    }
};
</script>
<style>
.post-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    max-width: 500px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.post-form h3 {
    margin-top: 0;
}

.post-form textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    line-height: 1.5;
}

.post-form input[type="submit"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #3498db;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

.post-form input[type="submit"]:hover {
    background-color: #2980b9;
}
</style>