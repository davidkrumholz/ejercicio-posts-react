const BASE_URL = "https://postreactisra-default-rtdb.firebaseio.com";

export default {
    getAllPosts: async () => {
        const response =  await fetch(`${BASE_URL}/posts/.json`);
        const data = await response.json();
        return data;
    }
}