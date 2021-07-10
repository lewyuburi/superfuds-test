import Icon from '@mdi/react'
import { mdiChevronLeft, mdiMinusCircleOutline, mdiPlusCircleOutline, mdiTrashCanOutline } from '@mdi/js';
import { moneyFormat } from '@/utils/index';
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
              <div className={styles.cartItem} key={item.product.id}>

                <div className={styles.cartItemDetails}>
                  <div className={styles.cartItemImage} style={{ backgroundImage: `url(${item.product.image})` }} />
                  <div className={styles.cartItemInfo}>
                    <h5 className={styles.cartItemTitle}>{item.product.title}</h5>
                    <span className={styles.cardItemMetadata}>x {item.product.units_sf} {item.product.units_sf === 1 ? 'unit' : 'units'} - {item.product.net_content} c/u</span>
                    <span className={styles.supplier}>{item.product.supplier}</span>
                    <span className={styles.cartItemPrice}>
                      <span className={styles.cartItemPriceSymbol}>
                        $
                      </span>
                      <span className={styles.cartItemPriceValue}>
                        {moneyFormat(Number(item.product.price_real))}
                      </span>
                    </span>
                  </div>
                </div>

                <div className={styles.cartItemQuantity}>

                  <button
                    className={styles.mutateQuantityButton}
                    onClick={() => props.decreaseItemQuanty(item.product.id)}
                    disabled={item.quantity <= 1}
                  >
                    <Icon path={mdiMinusCircleOutline}
                      title="Remove"
                      size={1.25}
                    />
                  </button>

                  <span className={styles.cartItemQuantity}>{item.quantity}</span>

                  <button
                    className={styles.mutateQuantityButton}
                    onClick={() => props.increaseItemQuanty(item.product.id)}
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
                    {moneyFormat(Number(item.product.price_real) * item.quantity)}
                  </span>
                </div>

                <div className={styles.cartItemActions}>
                  <button
                    className={styles.deleteButton}
                    onClick={() => props.removeItem(item.product.id)}
                  >
                    <Icon path={mdiTrashCanOutline}
                      title="Delete"
                      size={1}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTemplate;
