import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import cn from 'classnames';
import { Footer } from '@';
import styles from './virtruLayout.css';

const VirtruLayout = ({ header, sider, content, className, ...props }) => {
  return (
    <Layout className={cn(styles.vdsMainLayout, className)} {...props}>
      {header}
      <Layout className={styles.vdsContainer}>
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
  className: PropTypes.string,
};

VirtruLayout.defaultProps = {
  header: null,
  sider: null,
  content: null,
  className: '',
};

export default VirtruLayout;
