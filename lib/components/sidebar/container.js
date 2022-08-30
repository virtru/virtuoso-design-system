import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../sidebarCard/sidebarCard';
import styles from './container.css';

const Container = ({ cardsData }) => {
  return (
    <div className={styles.wrapContainer}>
      {cardsData
        .sort((a, b) => a.index - b.index)
        .map((card, i) => (
          <Card
            {...{
              ...card,
              key: i,
            }}
          />
        ))}
    </div>
  );
};

Container.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Container;
