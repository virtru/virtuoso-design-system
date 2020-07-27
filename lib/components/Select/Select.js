import React, { forwardRef, useMemo } from 'react';
import ReactSelect from 'react-select';

import { useIsMobile } from '@/helpers';

import DropdownIndicator from './components/DropdownIndicator/DropdownIndicator';
import IndicatorSeparator from './components/IndicatorSeparator/IndicatorSeparator';
import ClearIndicator from './components/ClearIndicator/ClearIndicator';
import MultiValueRemove from './components/MultiValueRemove/MultiValueRemove';

import styles from './Select.css';
import getStyles from './Select.css.js';

const Select = (props, ref) => {
  const isMobile = useIsMobile();
  const customStyles = useMemo(() => getStyles(isMobile), [isMobile]);

  return (
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
  );
};

export default forwardRef(Select);
