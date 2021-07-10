import React from 'react';

import NewProductsCarousel from '@/components/organisms/newProductsCarousel';

import styles from './homePage.module.scss';

const HomePageTemplate = () => {
  return (
    <div className={styles.homePage}>

      <div className="container">
        <React.Suspense fallback={<p>Cargando..</p>}>

          <NewProductsCarousel />

        </React.Suspense>
      </div>

    </div>
  );
};

export default HomePageTemplate;
