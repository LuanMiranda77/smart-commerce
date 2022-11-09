import axios from "axios";
import { persistLocalStorage } from "../utils/persistLocalStorage";
import { UtilsUserLocal } from "../utils/utils_userLocal";
import { getToken } from "./auth";


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        
    }
  
});

api.interceptors.request.use(async config => {
  // const user = persistLocalStorage('@user-data', '', 'get');
   const user = UtilsUserLocal.getTokenLogin();
    if (user && config !== undefined) {
      config.headers.Authorization = `${user.token}`;
    }
    return config;
});


export {api};
