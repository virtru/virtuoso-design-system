import React from 'react';
import { components as ReactSelectComponent } from 'react-select';
import cn from 'classnames';

import Chevron from './assets/chevron.svg';
import styles from './DropdownIndicator.css';

const DropdownIndicator = props => {
  const {
    selectProps: { menuIsOpen, isDisabled },
  } = props;

  const classNames = cn(styles.chevron, {
    [styles.inverted]: menuIsOpen,
    [styles.disabled]: isDisabled,
  });

  return (
    <ReactSelectComponent.DropdownIndicator {...props}>
      <div className={classNames}>
        <Chevron />
      </div>
    </ReactSelectComponent.DropdownIndicator>
  );
};

DropdownIndicator.propTypes = ReactSelectComponent.DropdownIndicator.propTypes;
DropdownIndicator.defaultProps = ReactSelectComponent.DropdownIndicator.defaultProps;

export default DropdownIndicator;
