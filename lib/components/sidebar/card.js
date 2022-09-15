import React from 'react';
import { Card as AntCard } from 'antd';
import PropTypes from 'prop-types';
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  extra: PropTypes.node,
  cover: PropTypes.node,
  bodyStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Card.defaultProps = {
  extra: null,
  cover: null,
  bodyStyle: {},
};

export default Card;
