import React from 'react';
import Icon from '@mdi/react'
import { mdiMinusCircleOutline, mdiPlusCircleOutline, mdiTrashCanOutline } from '@mdi/js';

import { moneyFormat } from '@/utils/index';
import { StateItem } from '@/stores/cart.slice';

import styles from './cartItemCard.module.scss'

type CartItemCardTemplateProps = {
  item: StateItem,
  increaseItemQuanty: (id: string) => void
  decreaseItemQuanty: (id: string) => void
  removeItem: (id: string) => void
}

const CartItemCardTemplate = (props: CartItemCardTemplateProps) => {
  return (
    <div className={styles.cartItemCard}>

      <div className={styles.cartItemDetails}>
        <div className={styles.cartItemImage} style={{ backgroundImage: `url(${props.item.product.image})` }} />
        <div className={styles.cartItemInfo}>
          <h5 className={styles.cartItemTitle}>{props.item.product.title}</h5>
          <span className={styles.cardItemMetadata}>x {props.item.product.units_sf} {props.item.product.units_sf === 1 ? 'unit' : 'units'} - {props.item.product.net_content} c/u</span>
          <span className={styles.supplier}>{props.item.product.supplier}</span>
          <span className={styles.cartItemPrice}>
            <span className={styles.cartItemPriceSymbol}>
              $
            </span>
            <span className={styles.cartItemPriceValue}>
              {moneyFormat(Number(props.item.product.price_real))}
            </span>
          </span>
        </div>
      </div>

      <div className={styles.cartItemQuantity}>

        <button
          className={styles.mutateQuantityButton}
          onClick={() => props.decreaseItemQuanty(props.item.product.id)}
          disabled={props.item.quantity <= 1}
        >
          <Icon path={mdiMinusCircleOutline}
            title="Remove"
            size={1.25}
          />
        </button>

        <span className={styles.cartItemQuantity}>{props.item.quantity}</span>

        <button
          className={styles.mutateQuantityButton}
          onClick={() => props.increaseItemQuanty(props.item.product.id)}
        >
          <Icon path={mdiPlusCircleOutline}
            title="Add"
            size={1.25}
          />
        </button>

      </div>

      <div className={styles.cartItemTotalPrice}>
        <span className={styles.cartItemPriceSymbol}>
          $
        </span>
        <span className={styles.cartItemPriceValue}>
          {moneyFormat(Number(props.item.product.price_real) * props.item.quantity)}
        </span>
      </div>

      <div className={styles.cartItemActions}>
        <button
          className={styles.deleteButton}
          onClick={() => props.removeItem(props.item.product.id)}
        >
          <Icon path={mdiTrashCanOutline}
            title="Delete"
            size={1}
          />
        </button>
      </div>
    </div>
  );
};

export default CartItemCardTemplate;
