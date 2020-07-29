import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import { expandChildren } from '@/helpers';

import styles from './styles/layout.css';

/**
 * Basic Layout
 *
 * @param {node} param0.children
 * @param {node} param0.footer
 * @param {node} param0.header
 */
function BasicLayout({ children }) {
  const [
    nextChildren,
    { Header: HeaderComponents, Footer: FooterComponents },
  ] = expandChildren(children, [Header, Footer]);
  return (
    <div className={styles.container}>
      {HeaderComponents}
      <div className={styles.containerInner}>{nextChildren}</div>
      {FooterComponents}
    </div>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.node,
};

BasicLayout.defaultProps = {
  children: null,
};

export default BasicLayout;
