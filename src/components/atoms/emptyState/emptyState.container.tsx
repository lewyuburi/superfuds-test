import React from 'react';

import { EmptyStateTemplate } from './index'

type EmptyStateContainerProps = {
  title: string
  text?: string
  icon?: string
  ctaText?: string
  cta?: () => void
}

const EmptyStateContainer = (props: EmptyStateContainerProps) => {
  return (
    <EmptyStateTemplate
      title={props.title}
      text={props.text}
      icon={props.icon}
      cta={props.cta}
    />
  );
};

export default EmptyStateContainer;
