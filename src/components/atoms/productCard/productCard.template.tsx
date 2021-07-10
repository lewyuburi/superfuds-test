import React from 'react';
import ReactTooltip from 'react-tooltip';

import { moneyFormat } from '@/utils/index'
import { Product } from '@/stores/product/newProducts.slice';

import styles from './productCard.module.scss'

type ProductCardTemplateProps = {
  product: Product
  addToCart: (product: Product) => void
  isInCart: (product: Product) => boolean
}

const ProductCardTemplate = (props: ProductCardTemplateProps) => {
  return (
    <div className={styles.productCard}>

      <div className={styles.productCardImage} style={{ backgroundImage: `url(${props.product.image})` }}>
        <div className={styles.productSealsList}>
          {props.product.sellos.map((seal) => (
            <div
              data-tip={seal.name}
              data-for="custom-color"
              key={seal.name}
              className={styles.productSealsListItem}
              style={{ backgroundImage: `url(${seal.image})` }}
            />
          ))}
        </div>
        <ReactTooltip
          getContent={(dataTip: string) => (
            <div>
              <span className={styles.tolltipModifier}>Producto</span> {dataTip}
            </div>
          )}
          id='custom-color'
          place='right'
          textColor='var(--color-white)'
          backgroundColor='var(--color-green-blue)'
          effect='solid'
        />
      </div>

      <div className={styles.productCardContent}>

        <div className={styles.productCardMetadata}>
          <span className={styles.productSupplier}>
            {props.product.supplier}
          </span>
          <span className={styles.productNetContent}>
            {props.product.net_content}
          </span>
        </div>

        <h2 className={styles.productCardTitle}>
          {props.product.title}
        </h2>

        <div className={styles.productCardPrice}>
          <span className={styles.productPriceSymbol}>$</span>
          <span className={styles.productPriceAmount}>{moneyFormat(Number(props.product.price_real))}</span>
          <span className={styles.productPriceUnits}>x {props.product.units_sf} {props.product.units_sf === 1 ? 'unit' : 'units'}</span>
        </div>

      </div>

      <button className={styles.productCardButton} onClick={() => props.addToCart(props.product)} disabled={props.isInCart(props.product)}>
        {!props.isInCart(props.product) ? 'Agregar al carrito' : 'Agregado'}
      </button>

    </div>
  );
};

export default React.memo(ProductCardTemplate);
