import {createSlice} from '@reduxjs/toolkit'


const CartSlice = createSlice({
    name: 'cart' ,
    initialState: {
        items: [],
        total: 0, 

    },

    reducers: {
        addItem:(state , action) =>{
            state.items.push(action.payload)
            state.total += action.payload.price / 100;
        },
        removeItem:(state) =>{
            state.items.pop()
        },
        clearCart: (state) =>{
            state.items.length = 0;
        }

    }
});
export const {addItem, removeItem,clearCart} = CartSlice.actions


export default CartSlice.reducer;