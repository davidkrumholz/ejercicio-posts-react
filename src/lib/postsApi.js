const BASE_URL = "https://postreactisra-default-rtdb.firebaseio.com";

export default {
    getAllPosts: async () => {
        const response =  await fetch(`${BASE_URL}/posts/.json`);
        const data = await response.json();
        return data;
    },
    getPostsById: async (postId) => {
        const response = await fetch(`${BASE_URL}/posts/${postId}/.json`);
        const data = await response.json();
        return data;
    },
    createComment: async (idPost, commentObject) => {
        const response = await fetch(`${BASE_URL}/posts/${idPost}/comentarios/.json`, {
            method: "POST",
            body: JSON.stringify(commentObject)
        });
        const data = await response.json();
        return data;
    },
    createPost: async (postObject) => {
        const response = await fetch(`${BASE_URL}/posts/.json`, {
            method: "POST",
            body: JSON.stringify(postObject)
        });
        const data = response.json();
        return data;
    }
}