/* eslint-disable no-param-reassign */
import React from 'react';
import { Switch as AntDSwitch } from 'antd';
import styles from './switch.css';

const Switch = (props) => {
  return <AntDSwitch {...props} className={styles.virtuosoCustomSwitch} />;
};

export default Switch;
