import React, { forwardRef, useMemo } from 'react';
import ReactSelect from 'react-select';

import { useIsMobile } from '@/helpers';

import DropdownIndicator from './components/DropdownIndicator/DropdownIndicator';
import IndicatorSeparator from './components/IndicatorSeparator/IndicatorSeparator';
import ClearIndicator from './components/ClearIndicator/ClearIndicator';
import MultiValueRemove from './components/MultiValueRemove/MultiValueRemove';

import styles from './Select.css';
import getStyles from './Select.css.js';
import cn from 'classnames';
import InfoIcon from '@/components/Input/assets/info-icon.svg';
import ErrorIcon from '@/components/Input/assets/error-icon.svg';

const Select = ({ message, ...props}, ref) => {
  const isMobile = useIsMobile();
  const customStyles = useMemo(() => getStyles(isMobile), [isMobile]);

  return (
    <span className={styles.container}>
      <ReactSelect
        isSearchable={false}
        ref={ref}
        {...props}
        className={styles.container}
        classNamePrefix="select"
        styles={customStyles}
        components={{
          DropdownIndicator,
          IndicatorSeparator,
          ClearIndicator,
          MultiValueRemove,
        }}
      />
      {message && (
        <span className={cn(styles.text)}>
          <span className={styles.icon}>{<InfoIcon />}</span>
          <span className={styles.description}>{message}</span>
        </span>
      )}
    </span>
  );
};

export default forwardRef(Select);
