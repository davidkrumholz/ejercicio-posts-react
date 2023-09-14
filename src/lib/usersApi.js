const BASE_URL = "https://postreactisra-default-rtdb.firebaseio.com";
export default {
    getAllUsers: async () => {
        const response = await fetch(`${BASE_URL}/usuarios/.json`);
        const data = response.json();
        return data;
    },
    getUserById: async (userId) => {
        const response = await fetch(`${BASE_URL}/usuarios/${userId}/.json`);
        const data = response.json();
        return data;
    }
}