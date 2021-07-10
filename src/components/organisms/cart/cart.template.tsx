import React from 'react';
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiCartOutline } from '@mdi/js';

import CartItemCard from '@/components/atoms/cartItemCard';
import EmptyState from '@/components/atoms/emptyState';

import { StateItem } from '@/stores/cart.slice';

import styles from './cart.module.scss'

type CartTemplateProps = {
  showCart: boolean
  items: StateItem[]
  doShowCart: (show: boolean) => void
  increaseItemQuanty: (id: string) => void
  decreaseItemQuanty: (id: string) => void
  removeItem: (id: string) => void
}

const CartTemplate = (props: CartTemplateProps) => {
  return (
    <div className={`${styles.cart} ${props.showCart ? styles.show : undefined}`}>
      <div className={styles.backdrop} onClick={() => props.doShowCart(false)} />

      <div className={styles.modal}>

        <div className={styles.modalHeader}>
          <button className={styles.closeModalButton} onClick={() => props.doShowCart(false)}>
            <Icon path={mdiChevronLeft}
              title="Search"
              size={1}
            />
            <span className={styles.closeModalText}>Volver a la tienda</span>
          </button>
          <div className={styles.cartTitle}>
            <h3 className={styles.cartTitleText} >Carrito de compras</h3>
            <div className={styles.cartItemsCounter}>
              <span className={styles.cartItemsCount}>
                {props.items.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
              <span>
                {props.items.reduce((acc, item) => acc + item.quantity, 0) === 1 ? "item" : "items"}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.modalBody}>

          {props.items.length > 0 ? (
            <React.Fragment>
              <div className={styles.headers}>
                <div className={styles.headerItems}>
                  Item
                </div>
                <div className={styles.headerQuantity}>
                  Cantidad
                </div>
                <div className={styles.headerTotalPrice}>
                  Precio
                </div>
                <div className={styles.headerActions} />
              </div>

              <div className={styles.cartItemsList}>
                {props.items.map((item: StateItem) => (
                  <CartItemCard
                    key={item.product.id}
                    item={item}
                    increaseItemQuanty={props.increaseItemQuanty}
                    decreaseItemQuanty={props.decreaseItemQuanty}
                    removeItem={props.removeItem}
                  />
                ))}
              </div>
            </React.Fragment>
          ) : (
            <EmptyState
              title="Tu carrito está vacío"
              text="Por favor, añade algunos productos a tu carrito"
              icon={mdiCartOutline}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default CartTemplate;
