import { Cargo } from './../../domain/enums/index';
import { UserAplicationType } from '../../domain/types/user_aplication';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    id: 0,
    codigo:0,
    nome: '',
    cpf:'',
    email: '',
    dataCriacao: null ,
    dataAtualizacao: null ,
    acesso: null,
    status: 'S',
    password:'',
    celular: '',
    cargo: null,
    roles: '',
}as UserAplicationType

export const usuarioSlice = createSlice({
    name:'user-aplication',
    initialState: initialState, 
    reducers:{
        cpf(state, action: PayloadAction<string>){
            state.cpf = action.payload
        },
        nome(state, action: PayloadAction<string>){
            state.nome = action.payload
        },
        email(state, action: PayloadAction<string>){
            state.email = action.payload
        },
        password(state, action: PayloadAction<string>){
            state.password = action.payload
        },
        telefone(state, action: PayloadAction<string>){
            state.celular = action.payload
        },
        cargo(state, action: PayloadAction<Cargo>){
            state.cargo = action.payload
        },
        roles(state, action: PayloadAction<string>){
            state.roles = action.payload;
        },
        setToken(state, action: PayloadAction<any>){
            state.token = action.payload;
        },
        load(state, action: PayloadAction<UserAplicationType>){
            return state = {...action.payload}
        },

        save(state, action: PayloadAction<UserAplicationType>){
            state = {...action.payload}
        },

        reset(state){
            state = {...initialState};
        },

    }
});
export const {nome, save, cargo, cpf, email, load, password, roles, telefone, setToken, reset } = usuarioSlice.actions;
export const selectState = (state: UserAplicationType) => state;
export const selectStateList = (state: { usuarios: Array<UserAplicationType>}) => state.usuarios;
export default usuarioSlice.reducer;
