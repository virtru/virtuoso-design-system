import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { Switch } from '@';

import styles from './itemOption.css';

const ItemOption = ({
  icon,
  name,
  changeSwitch,
  tooltipTitle,
  disabled,
  hasValue,
  placementTooltip,
}) => {
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
      <Tooltip placement={placementTooltip} title={tooltipTitle}>
        <div className={styles.item}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className={styles.itemInner} onClick={handleChange}>
            <span className={styles.icon}>{icon}</span>
            <span>{name}</span>
          </div>
          <Switch onClick={handleChange} checked={checked} disabled={disabled} aria-label={name} />
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
  disabled: PropTypes.bool,
  hasValue: PropTypes.bool || PropTypes.string,
  placementTooltip: PropTypes.string,
};

ItemOption.defaultProps = {
  tooltipTitle: null,
  hasValue: null,
  disabled: false,
  placementTooltip: 'left',
};

export default ItemOption;
