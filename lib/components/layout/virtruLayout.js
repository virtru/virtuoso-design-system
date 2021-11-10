import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { Footer } from '@';
import styles from './virtruLayout.css';

const VirtruLayout = ({ header, sider, content }) => {
  return (
    <Layout className={styles.mainLayout}>
      {header}
      <Layout className={styles.container}>
        {sider}
        {content}
      </Layout>
      <Footer />
    </Layout>
  );
};

VirtruLayout.propTypes = {
  header: PropTypes.node,
  sider: PropTypes.node,
  content: PropTypes.node,
};

VirtruLayout.defaultProps = {
  header: null,
  sider: null,
  content: null,
};

export default VirtruLayout;
