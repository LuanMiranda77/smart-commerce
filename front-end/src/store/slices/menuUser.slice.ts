import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    display: 'none'   
}


export const menuUserSlice = createSlice({
    name:'menuUser',
    initialState: initialState,
    reducers:{

        load(state){
            return state;
        },

        save(state, action: PayloadAction<string>){
            state.display = action.payload
        },
        
        reset(state){
            return state = {...initialState};
        }
    }
});
export const {save, load, reset } = menuUserSlice.actions;
export const selectState = (state: any) => state;
export default menuUserSlice.reducer;