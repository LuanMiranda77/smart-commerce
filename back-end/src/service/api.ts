import axios from "axios";

import url from "../config/ambient";

export let TOKEN_KEY_ML = null;

export let TOKEN_KEY_MP = null;

export let TOKEN_KEY_API = null;


export const setToken = (token: String, id: Number) =>{
   if(id === 1){
    TOKEN_KEY_API = token;
   }else if(id === 2){
     TOKEN_KEY_ML = token;
   }else{
    TOKEN_KEY_MP = token;
   } 
}

export const getToken = (id: Number) =>{
  let token = '';
  if(id === 1){
    token=TOKEN_KEY_API;
   }else if(id === 2){
    token=TOKEN_KEY_ML;
   }else{
    token=TOKEN_KEY_MP;
   } 
  return token;
}

export const isAuthenticated = (id: Number) => {
  let band = false;
  if(id === 1 && TOKEN_KEY_API !== null){
    band = true;
  }else if(id === 2 && TOKEN_KEY_ML !== null){
    band = true;
   }else if (id === 2 && TOKEN_KEY_MP !== null){
    band = true;
   } 
   return band;
};

const apiMDLivre = axios.create({
    baseURL: "",
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
});

const api = axios.create({
  baseURL: url.apiURI,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async config => {
  const token = TOKEN_KEY_API;
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

apiMDLivre.interceptors.request.use(async config => {
  const token = TOKEN_KEY_ML;
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export {apiMDLivre};
export {api}
