import React from 'react';
import Icon from '@mdi/react'

import styles from './emptyState.module.scss'

type EmptyStateTemplateProps = {
  title: string
  text?: string
  icon?: string
  ctaText?: string
  cta?: () => void
}

const EmptyStateTemplate = (props: EmptyStateTemplateProps) => {
  return (
    <div className={styles.emptyState}>

      {props.icon && (
        <Icon path={props.icon}
          title="Empty"
          size={2}
          className={styles.icon}
        />
      )}

      <h4 className={styles.title}>{props.title}</h4>

      {props.text && (
        <p className={styles.text}>{props.text}</p>
      )}

      {props.cta && (
        <button className={styles.cta} onClick={props.cta}>
          {props.ctaText || 'Get started'}
        </button>
      )}

    </div>
  );
};

export default EmptyStateTemplate;
