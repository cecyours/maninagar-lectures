import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000', // Replace with your API base URL
    headers: {
        // 'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default axiosInstance