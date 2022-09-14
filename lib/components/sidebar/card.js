import React from 'react';
import { Card as AntCard } from 'antd';
import styles from './card.css';

const Card = ({ title, extra, cover, bodyStyle }) => (
  <AntCard
    {...{
      className: styles.wrap,
      bordered: false,
      title,
      extra,
      cover,
      bodyStyle,
    }}
  />
);

export default Card;
