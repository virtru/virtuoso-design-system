import React from 'react';
import { Card as AntCard } from 'antd';
import PropTypes from 'prop-types';
import styles from './card.css';

const Card = ({ title, extra, children }) => (
  <AntCard
    className={styles.wrap}
    title={title}
    extra={extra}
    bordered={false}
    bodyStyle={{
      borderBottom: '1px solid var(--vds-color-slate-darker)',
      marginBottom: '23px',
    }}
  >
    {children}
  </AntCard>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  extra: PropTypes.node,
  children: PropTypes.node,
};

Card.defaultProps = {
  extra: null,
  children: null,
};

export default Card;
