
import store from '@/config/store'

import NewProductsService from '@/services/product/newProducts.service'

import {
  getNewProducts,
  getNewProductsSuccess,
  getNewProductsFailure,
} from '@/stores/product/newProducts.slice'

const get = async () => {
  store.dispatch(getNewProducts())

  try {
    const newProducstResponse = await NewProductsService.get()
    store.dispatch(getNewProductsSuccess(newProducstResponse))
  } catch (error) {
    store.dispatch(getNewProductsFailure())
    return
  }
}

const newProductsProvider = {
  get,
}

export default newProductsProvider
