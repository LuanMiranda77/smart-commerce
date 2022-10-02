import axios from "axios";
import { getToken } from "./auth";


const api = axios.create({
    baseURL: "http://localhost:8080/",
 
});

api.interceptors.request.use(async config => {
    const token = getToken();
    // if (token && config !== null) {
    //   config.headers.Authorization = `${token}`;
    // }
    return config;
});


export {api};
