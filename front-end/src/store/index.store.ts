// import {createStore , combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import {usuarioSlice, estabelecimentoSlice} from './slices';



const storeConfig = configureStore({
    reducer:{
        user: usuarioSlice.reducer,
        estabelecimento: estabelecimentoSlice.reducer,
       
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(pokemonApi.middleware),

});

export type RootState = ReturnType< typeof storeConfig.getState>
export default storeConfig;
