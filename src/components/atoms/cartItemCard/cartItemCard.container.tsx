import React from 'react';

import { StateItem } from '@/stores/cart.slice';

import { CartItemCardTemplate } from './index'

type CartItemCardContainerProps = {
  item: StateItem,
  increaseItemQuanty: (id: string) => void
  decreaseItemQuanty: (id: string) => void
  removeItem: (id: string) => void
}

const CartItemCardContainer = (props: CartItemCardContainerProps) => {
  return (
    <CartItemCardTemplate
      item={props.item}
      increaseItemQuanty={props.increaseItemQuanty}
      decreaseItemQuanty={props.decreaseItemQuanty}
      removeItem={props.removeItem}
    />
  );
};

export default CartItemCardContainer;
