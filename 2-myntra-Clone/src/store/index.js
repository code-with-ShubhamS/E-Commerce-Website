import {configureStore} from '@reduxjs/toolkit'
import items from './Items';
import fetchStatusSlice from './FetchStatusSlice';
import BagSlice from './BagSlice';


const store=configureStore({
    reducer:{
        Items:items.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        Bag:BagSlice.reducer
    }
})
export default store;