import React from 'react';

import { LogoTemplate } from './index';

type LogoContainerProps = {
  width?: string,
  height?: string,
};

const LogoContainer = (props: LogoContainerProps) => {
  return (
    <LogoTemplate
      width={props.width}
      height={props.height}
    />
  );
};

export default LogoContainer;
