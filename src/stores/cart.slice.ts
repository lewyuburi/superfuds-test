import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product } from '@/stores/product/newProducts.slice'

export type StateItem = {
  product: Product
  quantity: number
}

export type CartSliceInitialState = {
  items: StateItem[],
  showCart: boolean
}

const cartSliceInitialState: CartSliceInitialState = {
  items: [],
  showCart: false
}

export const cartSlice = createSlice({
  name: 'cart',

  initialState: cartSliceInitialState,

  reducers: {

    showCart: (state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload
    },

    addItem: (state, action: PayloadAction<Product>) => {
      const newItem: StateItem = {
        quantity: 1,
        product: action.payload
      }

      state.items = [...state.items, newItem]
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item: StateItem) => item.product.id !== action.payload)
    },

    increaseItemQuanty: (state, action: PayloadAction<string>) => {
      state.items.forEach((item: StateItem) => {
        if (item.product.id === action.payload) {
          item.quantity++
        }
      })
    },

    decreaseItemQuanty: (state, action: PayloadAction<string>) => {
      state.items.forEach((item: StateItem) => {
        if (item.product.id === action.payload) {
          item.quantity--
        }
      })
    }

  },
})

// Action creators are generated for each case reducer function
export const { showCart, addItem, removeItem, increaseItemQuanty, decreaseItemQuanty } = cartSlice.actions

export default cartSlice.reducer
