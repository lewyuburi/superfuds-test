import React from 'react';

import styles from './avatar.module.scss'

type AvatarTemplateProps = {
  src?: string
  title?: string
  size?: string
}

const AvatarTemplate = (props: AvatarTemplateProps) => {
  return (
    <div
      className={styles.avatar}
      style={{
        width: props.size,
        height: props.size,
        backgroundImage: `url(${props.src})`
      }}
    >

    </div>
  );
};

AvatarTemplate.defaultProps = {
  size: "32px"
}

export default AvatarTemplate;
