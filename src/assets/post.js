let posts = [];

export default {
  getPosts() {
    return posts;
  },

  addPost(post) {
    posts.push(post);
  }
};