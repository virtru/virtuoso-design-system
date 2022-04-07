import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Tooltip } from 'antd';

import styles from './itemOption.css';

const ItemOption = ({ icon, name, changeSwitch, tooltipTitle, disabled, hasValue }) => {
  const [checked, setChecked] = useState(hasValue);

  const handleChange = () => {
    if (disabled) return;

    setChecked(() => {
      changeSwitch(!checked);
      return !checked;
    });
  };

  return (
    <div className={styles.wrap}>
      <Tooltip placement="left" title={tooltipTitle}>
        <div className={styles.item}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className={styles.itemInner} onClick={handleChange}>
            <span className={styles.icon}>{icon}</span>
            <span>{name}</span>
          </div>
          <Switch onClick={handleChange} checked={checked} disabled={disabled} />
        </div>
      </Tooltip>
    </div>
  );
};

ItemOption.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  tooltipTitle: PropTypes.node || PropTypes.string,
  changeSwitch: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  hasValue: PropTypes.bool || PropTypes.string,
};

ItemOption.defaultProps = {
  tooltipTitle: null,
  hasValue: null,
};

export default ItemOption;
