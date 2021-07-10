import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '@/stores/cart.slice'

import newProductsReducer from '@/stores/product/newProducts.slice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    newProducts: newProductsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
