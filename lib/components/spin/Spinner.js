import React from 'react';
import PropTypes from 'prop-types';
import styles from './Spinner.css';

import { ReactComponent as LogoCircle } from '../../assets/logo-circle.svg';
import { ReactComponent as Logo } from '../../assets/logo-v.svg';
import { ReactComponent as Export } from '../../assets/export.svg';

/**
 * spinner
 * @param size {String} - spinner's container width and height
 * @param variant {String} - logo or export
 * @param title {Object} - font-size and text string
 * @returns {*}
 * @constructor
 */
export default function Spinner({ size, variant, title }) {
  return (
    <div className={['at_spinner', styles.container].join(' ')}>
      <div className={styles.spinnerContainer} style={{ width: size, height: size }}>
        <LogoCircle className={styles.circle} />
        <div className={styles.middle}>
          {variant === 'logo' && <Logo className={styles.logo} />}
          {variant === 'export' && <Export className={styles.export} />}
        </div>
      </div>
      {title && (
        <span
          className={['at_spinner_text', styles.text].join(' ')}
          style={{ fontSize: title.size }}
        >
          {title.value}
        </span>
      )}
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['logo', 'export']),
  title: PropTypes.shape({
    value: PropTypes.node.isRequired,
    size: PropTypes.string.isRequired,
  }),
};

Spinner.defaultProps = {
  title: null,
  variant: 'logo',
};
