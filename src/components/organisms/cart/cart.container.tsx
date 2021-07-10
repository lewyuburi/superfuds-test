import React from 'react';

import { useAppSelector, useAppDispatch } from '@/hooks/store.hook'
import {
  showCart as showCartAction,
  increaseItemQuanty as increaseItemQuantyAction,
  decreaseItemQuanty as decreaseItemQuantyAction,
  removeItem as removeItemAction,
} from '@/stores/cart.slice'

import { CartTemplate } from './index';

const CartContainer = () => {
  const dispatch = useAppDispatch()

  const showCart = useAppSelector((state) => state.cart.showCart)
  const cartItems = useAppSelector((state) => state.cart.items)

  const doShowCart = (show: boolean) => {
    dispatch(showCartAction(show))
  }

  const increaseItemQuanty = (itemId: string) => {
    dispatch(increaseItemQuantyAction(itemId))
  }

  const decreaseItemQuanty = (itemId: string) => {
    dispatch(decreaseItemQuantyAction(itemId))
  }

  const removeItem = (itemId: string) => {
    dispatch(removeItemAction(itemId))
  }

  return (
    <CartTemplate
      showCart={showCart}
      items={cartItems}
      doShowCart={doShowCart}
      increaseItemQuanty={increaseItemQuanty}
      decreaseItemQuanty={decreaseItemQuanty}
      removeItem={removeItem}
    />
  );
};

export default CartContainer;
