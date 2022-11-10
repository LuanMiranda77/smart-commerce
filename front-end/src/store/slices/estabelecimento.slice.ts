import { EstabelecimentoService } from './../../module/estabelecimento/pages/services/EstabelecimentoService';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegimeTributario } from '../../domain/enums';
import { EstabelecimentoType } from './../../domain/types/estabelecimento';
import { api } from "../../config/api";
import { RootState } from '../index.store';

const initialState = {
    razao: '',
    nome:undefined,
    cnpj:undefined,
    cpf:undefined,
    regime: RegimeTributario.MEI,
    cep:undefined,
    logradouro: undefined,
    numero: undefined,
    bairro: undefined,
    cidade: undefined,
    uf: undefined,
    tel:undefined,
    cel:undefined,
    email:'',
    logo: undefined,
    codIbge:undefined,
    
} as EstabelecimentoType;

const service = new EstabelecimentoService();
const url='api/Estabelecimento';

export const estabelecimentoSlice = createSlice({
    name:'estabelecimento',
    initialState: initialState,
    reducers:{

        load(state){
            api.get(url).then( resp =>{
                return {...state, estabelecimento: resp.data};
            })
            .catch(error => {
                console.log(error.response.data);
                return Promise.reject(error.response.data[0]);
            });
        },

        save(state, action: PayloadAction<EstabelecimentoType>){
             service.post(action.payload);
             return {...state, estabelecimento: action.payload}
        },

        reset(state){
            return {...state, estabelecimento:initialState}
        },
    }
});
export const {save, load, reset } = estabelecimentoSlice.actions;
export const selectState = (state: RootState) => state.estabelecimento;
export default estabelecimentoSlice.reducer;
