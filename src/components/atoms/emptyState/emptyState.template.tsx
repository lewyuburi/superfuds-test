import React from 'react';

import styles from './emptyState.module.scss'

type EmptyStateTemplateProps = {
  title: string
  text?: string
  icon?: React.ReactNode
}

const EmptyStateTemplate = (props: EmptyStateTemplateProps) => {
  return (
    <div className={styles.emptyState}>

    </div>
  );
};

export default EmptyStateTemplate;
