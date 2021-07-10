import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Sello = {
  name: string;
  image: string;
}

export type Product = {
  id: string;
  title: string;
  supplier: string;
  tax: string;
  price_real: string;
  image: string;
  thumbnail: string;
  description: string;
  units_sf: number;
  slug: string;
  category: string;
  subcategory: string;
  net_content: string;
  sellos: Sello[];
}

export type status = 'loading' | 'success' | 'error' | undefined

export type NewProductsSliceState = {
  status: status,
  products: Product[]
}

const newProductsSliceInitialState: NewProductsSliceState = {
  products: [],
  status: undefined
}

export const newProductsSlice = createSlice({
  name: 'newProducts',

  initialState: newProductsSliceInitialState,

  reducers: {

    getNewProducts: (state) => {
      state.status = 'loading'
    },

    getNewProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.status = 'success'
      state.products = action.payload
    },

    getNewProductsFailure: (state) => {
      state.status = 'error'
    },
  },
})

// Action creators are generated for each case reducer function
export const { getNewProducts, getNewProductsSuccess, getNewProductsFailure } = newProductsSlice.actions

export default newProductsSlice.reducer
