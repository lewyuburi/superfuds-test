import React from 'react';

import { CarouselTemplate } from './index'

type CarouselContainerProps = {
  children: React.ReactNode,
}

const CarouselContainer = (props: CarouselContainerProps) => {

  const ref = React.useRef<HTMLDivElement>(null);

  const scrollToIndex = (scrollOffset: number) => {
    const element: HTMLDivElement | null = ref?.current

    if (element) {
      element.scrollLeft += scrollOffset
    }
  }

  return (
    <CarouselTemplate
      innerRef={ref}
      children={props.children}
      scrollToIndex={scrollToIndex}
    />
  );
};

export default React.memo(CarouselContainer);
