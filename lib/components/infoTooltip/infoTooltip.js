import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import { Button } from '@';

import styles from './infoTooltip.css';

export const infoTooltipOptions = {
  placements: [
    'top',
    'left',
    'right',
    'bottom',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom',
  ],
  defaultPlacement: 'top',

  defaultSize: '12px',

  triggers: ['hover', 'focus', 'click', 'contextMenu'],
  defaultTrigger: 'click',
};

const InfoTooltip = ({ title, placement, size, trigger }) => (
  <Tooltip placement={placement} title={title} trigger={trigger}>
    <Button
      className={styles.trigger}
      type="text"
      aria-label="tooltip button"
      icon={<InfoCircleOutlined style={{ fontSize: size }} aria-label="" />}
    />
  </Tooltip>
);

InfoTooltip.propTypes = {
  title: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(infoTooltipOptions.placements),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  trigger: PropTypes.oneOfType([
    PropTypes.oneOf(infoTooltipOptions.triggers),
    PropTypes.arrayOf(PropTypes.oneOf(infoTooltipOptions.triggers)),
  ]),
};

InfoTooltip.defaultProps = {
  placement: infoTooltipOptions.defaultPlacement,
  size: infoTooltipOptions.defaultSize,
  trigger: infoTooltipOptions.defaultPlacement,
};

export default InfoTooltip;
