import React from 'react';

import { AvatarTemplate } from './index'

type AvatarContainerProps = {
  src?: string
  title?: string
  size?: string
}

const AvatarContainer = (props: AvatarContainerProps) => {
  return (
    <AvatarTemplate
      src={props.src}
      title={props.title}
      size={props.size}
    />
  );
};

export default AvatarContainer;
