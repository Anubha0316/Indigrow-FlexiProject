<template>
    <div class="post-list">
      <div v-for="post in posts" :key="post.id" class="card my-3">
        <div class="card-body">
          <p class="card-text">{{ post.body }}</p>
          <p class="card-subtitle text-muted">{{ post.date }}</p>
        </div>
      </div>
    </div>
</template>

<script>
import postService from '../assets/post';

export default {
  name: "post-list",
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    this.posts = await postService.getPosts();
    this.$root.$on("post-submitted", async () => {
      this.posts = await postService.getPosts();
    });
  },
  created() {
    this.$root.$on("post-submitted", async () => {
      this.posts = await postService.getPosts();
    });
  },
  destroyed() {
    this.$root.$off("post-submitted");
  },
  
};
</script>
<style>
.post-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  width: 100%;
  max-width: 600px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 20px;
}

.card-text {
  font-size: 20px;
  line-height: 1.5;
}

.card-subtitle {
  font-size: 16px;
}
  
</style>