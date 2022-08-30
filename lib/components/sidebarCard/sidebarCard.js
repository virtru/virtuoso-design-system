import React from 'react';
import { Card as AntCard } from 'antd';
import styles from './sidebarCard.css';

export const Card = (props) => {
  return (
    <div className={styles.wrap}>
      <AntCard
        {...{
          bordered: false,
          ...props
        }}
      ></AntCard>
    </div>
  );
};
