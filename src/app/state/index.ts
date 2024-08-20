import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes{
    isSidebarColloapsed: boolean;
    isDarkMode:boolean;
}

const initialState:InitialStateTypes={
    isSidebarColloapsed: false,
    isDarkMode : false,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers:{
        setIsSidebarColloapsed:(state, action: PayloadAction<boolean>)=>{
          state.isSidebarColloapsed= action.payload;  
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>)=>{
            state.isDarkMode= action.payload;  
        },
    },
});

export const{setIsSidebarColloapsed,setIsDarkMode}=globalSlice.actions;

export default globalSlice.reducer;