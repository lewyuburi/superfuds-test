import React from 'react';
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import styles from './carousel.module.scss'

type CarouselTemplateProps = {
  children: React.ReactNode,
  innerRef: React.RefObject<HTMLDivElement>
  scrollToIndex: (scrollOffset: number) => void
}

const CarouselTemplate = (props: CarouselTemplateProps) => {
  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={() => props.scrollToIndex(-257)}>
        <Icon path={mdiChevronLeft}
          title="Previous"
          size={1.5}
        />
      </button>

      <div className={styles.carouselInner} ref={props.innerRef}>
        {props.children}
      </div>

      <button className={styles.nextButton} onClick={() => props.scrollToIndex(257)}>
        <Icon path={mdiChevronRight}
          title="Next"
          size={1.5}
        />
      </button>

    </div>
  );
};

export default React.memo(CarouselTemplate);
