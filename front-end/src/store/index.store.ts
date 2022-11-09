// import {createStore , combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import {usuarioSlice, estabelecimentoSlice, menuUserSlice } from './slices';



const storeConfig = configureStore({
    reducer:{
        userAplication: usuarioSlice.reducer,
        estabelecimento: estabelecimentoSlice.reducer,
        menuUser: menuUserSlice.reducer,

       
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(pokemonApi.middleware),

});

export type RootState = ReturnType< typeof storeConfig.getState>
export default storeConfig;
