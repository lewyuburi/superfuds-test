import HomePageSection from '@/components/molecules/homePageSection';
import Carousel from '@/components/atoms/carousel'
import ProductCard from '@/components/atoms/productCard';

import { Product } from '@/stores/product/newProducts.slice';

import styles from './newProductsCarousel.module.scss';

type NewProductCarouselTemplateProps = {
  products: Product[]
}

const NewProductCarouselTemplate = (props: NewProductCarouselTemplateProps) => {
  return (
    <div className={styles.newProductsCarousel}>

      <HomePageSection sectionTitle="Nuevo en SuperFuds">
        <Carousel>
          {props.products.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </Carousel>
      </HomePageSection>
    </div>
  );
};

export default NewProductCarouselTemplate;
