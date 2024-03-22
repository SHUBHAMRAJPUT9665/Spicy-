import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './CartSlice'

const appStore = configureStore({
    reducer: {
        cart: CartReducer,
    }

})


export default appStore;