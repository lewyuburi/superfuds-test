import React from 'react';

import { EmptyStateTemplate } from './index'

type EmptyStateContainerProps = {
  title: string
  text?: string
  icon?: React.ReactNode
}

const EmptyStateContainer = (props: EmptyStateContainerProps) => {
  return (
    <EmptyStateTemplate
      title={props.title}
      text={props.text}
      icon={props.icon}
    />
  );
};

export default EmptyStateContainer;
