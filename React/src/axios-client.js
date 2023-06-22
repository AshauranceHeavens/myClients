import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");

    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = `application/json`;
    config.headers.Accept = "application/json";

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        return response;
    }
);

export default axiosClient;
