import React from 'react';

import { useAppSelector } from '@/hooks/store.hook'
import NewProductsProvider from '@/providers/product/newProducts.provider'

import { NewProductsCarouselTemplate } from './index';

const NewProductCarouselContainer = () => {

  const products = useAppSelector((state) => state.newProducts.products)

  React.useEffect(() => {
    NewProductsProvider.get()
  }, []);

  return (
    <NewProductsCarouselTemplate
      products={products}
    />
  );
};

export default NewProductCarouselContainer;
