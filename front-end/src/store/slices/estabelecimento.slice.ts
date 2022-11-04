import { EstabelecimentoType } from './../../domain/types/estabelecimento';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cpf } from './usuario.slice';
import {RegimeTributario} from '../../domain/enums';

const initialState = {
    razao: null,
    nome:null,
    cnpj:null,
    cpf:null,
    regime: RegimeTributario.MEI,
    cep:null,
    logradouro: null,
    numero: null,
    bairro: null,
    cidade: null,
    uf: null,
    tel: null,
    cel:null,
    email:null,
    logo: null,
    codIbge:null,
    
} as EstabelecimentoType;

export const slice = createSlice({
    name:'estabelecimento',
    initialState: initialState,
    reducers:{

        load(state, action: PayloadAction<EstabelecimentoType>){
            state = {...action.payload}
        },

        save(state, action: PayloadAction<EstabelecimentoType>){
             return {...state, estabelecimento: action.payload}
        },

        reset(state){
            return {...state, estabelecimento:initialState}
        },

 
    }
});
export const {save, load } = slice.actions;
export const selectState = (state: EstabelecimentoType) => state;
export default slice.reducer;
