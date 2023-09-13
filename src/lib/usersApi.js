const BASE_URL = "https://postreactisra-default-rtdb.firebaseio.com";
export default {
    getAllUsers: async () => {
        const response = await fetch(`${BASE_URL}/usuarios/.json`);
        const data = response.json();
        return data;
    }
}