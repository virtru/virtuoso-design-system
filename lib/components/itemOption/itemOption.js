import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Tooltip } from 'antd';

import styles from './itemOption.css';

const ItemOption = ({ icon, name, changeSwitch, tooltipTitle }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
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
          <Switch onClick={handleChange} checked={checked} />
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
};

ItemOption.defaultProps = {
  tooltipTitle: null,
};

export default ItemOption;
