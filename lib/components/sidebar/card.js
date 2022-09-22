import React from 'react';
import { Card as AntCard } from 'antd';
import PropTypes from 'prop-types';
import styles from './card.css';

const Card = ({ title, extra, cover }) => (
  <AntCard
    className={styles.wrap}
    title={title}
    extra={extra}
    cover={cover}
    bordered={false}
    bodyStyle={{
      borderBottom: '1px solid var(--vds-color-slate-darker)',
      marginBottom: '23px',
    }}
  />
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  extra: PropTypes.node,
  cover: PropTypes.node,
};

Card.defaultProps = {
  extra: null,
  cover: null,
};

export default Card;
