// import {createStore , combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import {usuarioSlice} from './slices';

const storeConfig = configureStore({
    reducer:{
        user: usuarioSlice.reducer
        
    }

});

export type RootState = ReturnType< typeof storeConfig.getState>
export default storeConfig;
