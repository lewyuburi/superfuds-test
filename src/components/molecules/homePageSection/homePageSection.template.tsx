import React from 'react';
import { Link } from 'react-router-dom';

import styles from './homePageSection.module.scss';

type HomePageSectiontemplateProps = {
  children: React.ReactNode
  sectionTitle: string
}

const HomePageSectiontemplate = (props: HomePageSectiontemplateProps) => {
  return (
    <div className={styles.homePageSection}>

      <div className={styles.header}>
        <h4 className={styles.title}>
          {props.sectionTitle}
        </h4>

        <Link className={styles.moreLink} to="#">
          Ver más
        </Link>
      </div>

      <div className={styles.content}>
        {props.children}
      </div>

    </div>
  );
};

export default HomePageSectiontemplate;
