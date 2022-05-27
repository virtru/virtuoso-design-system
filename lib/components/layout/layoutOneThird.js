import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '@';

import styles from './layoutOneThird.css';

const LayoutOneThird = ({ left, right }) => {
  return (
    <div className={styles.wrap}>
      <Row gutter={{ xs: 16, sm: 24, md: 42 }}>
        <Col span={16} xs={24} sm={12} md={14}>
          {left}
        </Col>
        <Col span={8} xs={24} sm={12} md={10} className={styles.rightCol}>
          {right}
        </Col>
      </Row>
    </div>
  );
};

LayoutOneThird.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};

export default LayoutOneThird;
