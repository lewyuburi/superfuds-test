import React from 'react';

import { AppLayoutTemplate } from './index';

type AppLayoutContainerProps = {
  children: React.ReactNode,
}

const AppLayoutContainer = (props: AppLayoutContainerProps) => {
  return (
    <AppLayoutTemplate
      children={props.children}
    />
  );
};

export default AppLayoutContainer;
