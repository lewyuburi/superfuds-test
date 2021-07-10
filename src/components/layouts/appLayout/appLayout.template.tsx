import React from 'react';

import Header from '@/components/organisms/header'
import Cart from '@/components/organisms/cart'

import styles from './appLayout.module.scss';

type AppLayoutTemplateProps = {
  children: React.ReactNode,
}

const AppLayoutTemplate = (props: AppLayoutTemplateProps) => {
  return (
    <div className={styles.appLayout}>
      <Header />
      {props.children}
      <Cart />
    </div>
  );
};

export default AppLayoutTemplate;
