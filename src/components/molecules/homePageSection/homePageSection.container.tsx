import React from 'react';

import { HomePageSectionTemplate } from './index'

type HomePageSectionContainerProps = {
  children: React.ReactNode
  sectionTitle: string
}

const HomePageSectionContainer = (props: HomePageSectionContainerProps) => {
  return (
    <HomePageSectionTemplate
      children={props.children}
      sectionTitle={props.sectionTitle}
    />
  );
};

export default HomePageSectionContainer;
