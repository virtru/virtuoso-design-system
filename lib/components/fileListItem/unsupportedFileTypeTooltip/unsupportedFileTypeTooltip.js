import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';

import styles from './unsupportedFileTypeTooltip.css';

const Item = ({ className, state, text }) => (
  <div className={cn(styles.limitationItem, className)}>
    {state ? (
      <CheckCircleFilled className={styles.limitationItemIconSuccess} />
    ) : (
      <CloseCircleFilled className={styles.limitationItemIconDanger} />
    )}

    {text}
  </div>
);

Item.propTypes = {
  className: PropTypes.string,
  state: PropTypes.bool.isRequired,
  text: PropTypes.node.isRequired,
};

Item.defaultProps = {
  className: undefined,
};

const UnsupportedFileTypeTooltip = ({
  watermarkEnabled,
  persistentProtectionEnabled,
  encryptedText,
  watermarkText,
  persistentProtectionText,
}) => (
  <>
    <Item state text={encryptedText} />

    {watermarkEnabled && <Item state={false} text={watermarkText} />}

    {persistentProtectionEnabled && <Item state={false} text={persistentProtectionText} />}
  </>
);

UnsupportedFileTypeTooltip.propTypes = {
  watermarkEnabled: PropTypes.bool,
  persistentProtectionEnabled: PropTypes.bool,
  encryptedText: PropTypes.node,
  watermarkText: PropTypes.node,
  persistentProtectionText: PropTypes.node,
};

UnsupportedFileTypeTooltip.defaultProps = {
  watermarkEnabled: false,
  persistentProtectionEnabled: false,
  encryptedText: 'Encrypted',
  watermarkText: 'Watermarking',
  persistentProtectionText: 'Persistent File Protection',
};

export default UnsupportedFileTypeTooltip;
