import React from 'react';

import { Product } from '@/stores/product/newProducts.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/store.hook'
import { addItem as addItemTocartAction, StateItem } from '@/stores/cart.slice'

import { ProductCardTemplate } from './index'

type ProductCardContainerProps = {
  product: Product
}

const ProductCardContainer = (props: ProductCardContainerProps) => {

  const dispatch = useAppDispatch()

  const cartItems = useAppSelector((state) => state.cart.items)

  const addToCart = (product: Product) => {
    dispatch(addItemTocartAction(product))
  }

  const isInCart = (product: Product) => {
    return cartItems.some((item: StateItem) => item.product.id === product.id)
  }

  return (
    <ProductCardTemplate
      product={props.product}
      addToCart={addToCart}
      isInCart={isInCart}
    />
  );
};

export default React.memo(ProductCardContainer);
