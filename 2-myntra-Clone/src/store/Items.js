import {createSlice} from '@reduxjs/toolkit'
const items=createSlice({
    name:"Items",
    initialState:[],
    reducers:{
        addInitialPost:(state,action)=>{
            return action.payload;
        }
    }
})
export const itemsAction=items.actions;
export default items;