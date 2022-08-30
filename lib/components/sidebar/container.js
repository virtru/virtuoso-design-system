import React from 'react';
import { Card } from '../sidebarCard/sidebarCard';
import styles from './container.css';

const Container = ({ cardsData }) => {
  {
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
  }
};

export default Container;
