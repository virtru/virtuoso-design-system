import React from 'react';
import { Card as AntCard } from 'antd';
import styles from './sidebarCard.css';

export const Card = (props) => {
  return (
    <AntCard
      {...{
        className: styles.wrap,
        bordered: false,
        ...props,
      }}
    />
  );
};
