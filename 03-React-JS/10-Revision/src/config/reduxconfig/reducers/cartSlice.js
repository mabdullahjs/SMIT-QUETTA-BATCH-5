import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addProduct: (state , action) =>{
            state.push(action.payload.product)
        }
    }
})

export const { addProduct} = cartSlice.actions;

export default cartSlice.reducer;