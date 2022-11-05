import { UserAplicationType } from '../../domain/types/user_aplication';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const usuarioSlice = createSlice({
    name:'user-aplication',
    initialState:{
        userAplication: {
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
            telefone: '',
            cargo: '',
            roles: new Array<number>()
        } as UserAplicationType,

        usuarios:new Array<UserAplicationType>()
    },
    reducers:{
        cpf(state, action: PayloadAction<string>){
            state.userAplication.cpf = action.payload
        },
        nome(state, action: PayloadAction<string>){
            state.userAplication.nome = action.payload
        },
        email(state, action: PayloadAction<string>){
            state.userAplication.email = action.payload
        },
        password(state, action: PayloadAction<string>){
            state.userAplication.password = action.payload
        },
        telefone(state, action: PayloadAction<string>){
            state.userAplication.telefone = action.payload
        },
        cargo(state, action: PayloadAction<string>){
            state.userAplication.cargo = action.payload
        },
        roles(state, action: PayloadAction<Array<number>>){
            state.userAplication.roles = action.payload;
        },

        load(state, action: PayloadAction<UserAplicationType>){
            state.userAplication = {...action.payload}
        },

        save(state, action: PayloadAction<UserAplicationType>){
            state.userAplication = {...action.payload}
        },

        reset(state){
            state.userAplication = {...usuarioSlice.getInitialState().userAplication};
        },

        addUser(state, action: PayloadAction<UserAplicationType>){
            state.usuarios.push(action.payload);
        }

 
    }
});
export const {nome, save, addUser, cargo, cpf, email, load, password, roles, telefone } = usuarioSlice.actions;
export const selectState = (state: { userAplication: UserAplicationType}) => state.userAplication;
export const selectStateList = (state: { usuarios: Array<UserAplicationType>}) => state.usuarios;
export default usuarioSlice.reducer;
