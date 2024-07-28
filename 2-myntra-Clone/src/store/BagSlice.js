import {createSlice} from '@reduxjs/toolkit'
const BagSlice=createSlice({
    name:"Bag",
    initialState:[],
    reducers:{
        addInBag:(state,action)=>{
            state.push(action.payload)
        },
        deleteFromBag:(state,action)=>{
            return state.filter(val=>val!=action.payload)         
        },
        emptyTheBag:(state)=>{
           return state=[];
        }
    }
})
export const BagAction = BagSlice.actions;
export default BagSlice;