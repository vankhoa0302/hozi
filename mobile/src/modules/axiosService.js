/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
console.log(process.env.API_URL);
const axiosService = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
    },
});

axiosService.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('@User_token');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
axiosService.interceptors.response.use(
    (response) => {
        // Edit response config
        return response.data;
    },
    async (error) => {
        const originalRequest = error.config;
        const token = await AsyncStorage.getItem('@User_token');

        if (token) {
            if (error.response.status === 401 && !originalRequest._retry) {
                AsyncStorage.clear();
            }
            return Promise.reject(error.response.data);
        } else {
            return Promise.reject(error.response.data);
        }
    }
);
export default axiosService