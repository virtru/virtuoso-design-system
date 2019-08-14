import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from './Checkbox.css';

export const VARIANT = {
  UNCHECKED: 'UNCHECKED',
  CHECKED: 'CHECKED',
  INDETERMINATE: 'INDETERMINATE',
  PRESET: 'PRESET',
};

const base36 = 36;
const afterDecimalIndex = 2;
const generateId = () =>
  Math.random()
    .toString(base36)
    .substr(afterDecimalIndex);

/**
 * Returns array of checkbox class names
 * @param variant
 * @param disabled
 * @returns {Array}
 */
function getCheckboxClassNames({ variant, disabled }) {
  const classNames = [styles.checkboxState];

  switch (variant) {
    case VARIANT.INDETERMINATE:
      classNames.push(styles.checkboxStateIndeterminate);
      break;
    case VARIANT.CHECKED:
      classNames.push(styles.checkboxStateChecked);
      break;
    case VARIANT.PRESET:
      classNames.push(styles.checkboxStatePreset);
      break;
    default:
      classNames.push(styles.checkboxStateUnchecked);
  }

  if (disabled) {
    classNames.push(styles.disabled);
  }

  return classNames;
}

/**
 * Checkbox component
 * @param disabled
 * @param variant
 * @param props
 * @returns {*}
 * @constructor
 */
const Checkbox = forwardRef(({ variant, disabled, ...props }, ref) => {
  const inputID = useMemo(() => generateId(), []);
  const classNames = getCheckboxClassNames({ variant, disabled });

  return (
    <label ref={ref} htmlFor={inputID} className={styles.label}>
      <div className={styles.checkboxContainer}>
        <input
          id={inputID}
          type="checkbox"
          disabled={disabled}
          checked={variant === VARIANT.CHECKED}
          className={styles.checkboxInput}
          {...props}
        />
        <div className={classNames.join(' ')} />
      </div>
    </label>
  );
});

Checkbox.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  disabled: false,
};

export default Object.assign(Checkbox, { VARIANT });
