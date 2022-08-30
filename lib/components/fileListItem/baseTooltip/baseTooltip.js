import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@';

import FileName from '../fileName/fileName';

import styles from './baseTooltip.css';

const BaseTooltip = ({ name, extension, tooltipText }) => (
  <>
    <div className={styles.tooltipTitle}>
      <FileName name={name} extension={extension} />
    </div>

    <Typography.Text className={styles.tooltipText}>{tooltipText}</Typography.Text>
  </>
);

BaseTooltip.propTypes = {
  name: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  tooltipText: PropTypes.node.isRequired,
};

export default BaseTooltip;
