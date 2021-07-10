import React from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/store.hook'
import { showCart as showCartAction } from '@/stores/cart.slice'

import { HeaderTemplate } from './index'

const HeaderContainer = () => {
  const dispatch = useAppDispatch()

  const cartItems = useAppSelector((state) => state.cart.items)

  const [showNavbar, setShowNavbar] = React.useState<boolean>(false)

  const doShowCart = () => {
    dispatch(showCartAction(true))
  }

  return (
    <HeaderTemplate
      showNavbar={showNavbar}
      cartItems={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
      setShowNavbar={setShowNavbar}
      doShowCart={doShowCart}
    />
  );
};

export default HeaderContainer;
