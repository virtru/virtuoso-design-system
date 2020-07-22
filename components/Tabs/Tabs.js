import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Tab, Tabs as TabsContainer, TabList, TabPanel } from 'react-tabs';

import styles from './Tabs.css';

const SIZE = {
  SMALL: 'SMALL',
  LARGE: 'LARGE',
};

const sizeClasses = {
  [SIZE.SMALL]: styles.small,
  [SIZE.LARGE]: styles.large,
};

/*
 * Renders tabs that can be clicked to switch tab panes
 * @param {Object} props
 * @prop {String} size
 * @prop {Node} children
 * @returns {*}
 */
const Tabs = ({ size, children, ...tabsProps }) => {
  return (
    <div className={cn(sizeClasses[size], styles.container)}>
      <TabsContainer {...tabsProps}>{children}</TabsContainer>
    </div>
  );
};

Tabs.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Object.assign(Tabs, { SIZE });
export { Tab, TabList, TabPanel };
