import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import useCheckboxSvg, { VARIANT } from './useCheckboxSvg';

import styles from './Checkbox.css';

const base36 = 36;
const afterDecimalIndex = 2;
const generateId = () => Math.random().toString(base36).substr(afterDecimalIndex);

/**
 * Checkbox component
 * @param disabled
 * @param variant
 * @param id
 * @param onChange
 * @param props
 * @returns {*}
 * @constructor
 */
const Checkbox = forwardRef(({ variant, disabled, id, onChange, ...props }, ref) => {
  const inputID = useMemo(() => id || generateId(), [id]);
  const visualClassNames = cn(styles.checkboxState, {
    [styles.disabled]: disabled,
  });
  const CheckboxSVG = useCheckboxSvg(variant);

  return (
    <label ref={ref} htmlFor={inputID} className={styles.label}>
      <div className={styles.checkboxContainer}>
        <input
          id={inputID}
          type="checkbox"
          disabled={disabled}
          checked={variant === VARIANT.CHECKED}
          className={styles.checkboxInput}
          onChange={onChange}
          {...props} // eslint-disable-line react/jsx-props-no-spreading
        />
        <div className={visualClassNames}>
          <CheckboxSVG />
        </div>
      </div>
    </label>
  );
});

Checkbox.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  disabled: false,
  id: undefined,
  onChange: undefined,
};

export { VARIANT };
export default Object.assign(Checkbox, { VARIANT });
