import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import classNames from 'classnames';

import { Switch } from '@';

import styles from './itemOption.css';

const ItemOption = ({ className, icon, name, tooltipTitle, onClick, ...props }) => (
  <div className={classNames(styles.wrap, className)}>
    <Tooltip placement="left" title={tooltipTitle}>
      <div className={styles.item}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={styles.itemInner} onClick={onClick}>
          <span className={styles.icon}>{icon}</span>
          <span>{name}</span>
        </div>
        <Switch onClick={onClick} aria-label={name} {...props} />
      </div>
    </Tooltip>
  </div>
);

ItemOption.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  tooltipTitle: PropTypes.node,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

ItemOption.defaultProps = {
  className: undefined,
  tooltipTitle: null,
  checked: false,
  disabled: false,
  onClick: undefined,
};

export default ItemOption;
