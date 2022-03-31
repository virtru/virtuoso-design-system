import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import styles from './infoTooltip.css';

const InfoTooltip = ({ title, placement, size, trigger }) => {
  return (
    <span className={styles.wrap}>
      <Tooltip placement={placement} title={title} trigger={trigger}>
        <InfoCircleOutlined style={{ fontSize: size }} />
      </Tooltip>
    </span>
  );
};

InfoTooltip.propTypes = {
  title: PropTypes.node || PropTypes.string,
  placement: PropTypes.string,
  size: PropTypes.string,
  trigger: PropTypes.string,
};

InfoTooltip.defaultProps = {
  title: '',
  placement: 'top',
  size: '12px',
  trigger: 'click',
};

export default InfoTooltip;
