import {createSlice, current} from '@reduxjs/toolkit'

const fetchStatusSlice=createSlice({
    name:"fetchStatus",
    initialState:{
      fetchDone:false,
      currentlyFetching:false  
    },
    reducers:{
        markFetchDone:(state,action)=>{
             state.fetchDone=true;
        },
        markFetchStarted:(state,action)=>{
             state.currentlyFetching=true;
        },
        markFetchFinished:(state,action)=>{
             state.currentlyFetching=false;
        }
    }
})
export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;