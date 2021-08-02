import { useIsMobile } from '@/helpers';

import fullChecked from './assets/Checkbox-checked-18.svg';
import fullPartial from './assets/Checkbox-partial-18.svg';
import fullPreset from './assets/Checkbox-preset-18.svg';
import fullUnchecked from './assets/Checkbox-unchecked-18.svg';
import mobileChecked from './assets/Checkbox-checked-24.svg';
import mobilePartial from './assets/Checkbox-partial-24.svg';
import mobilePreset from './assets/Checkbox-preset-24.svg';
import mobileUnchecked from './assets/Checkbox-unchecked-24.svg';

export const VARIANT = {
  UNCHECKED: 'UNCHECKED',
  CHECKED: 'CHECKED',
  INDETERMINATE: 'INDETERMINATE',
  PRESET: 'PRESET',
};

const fullCheckboxMap = {
  [VARIANT.INDETERMINATE]: fullPartial,
  [VARIANT.CHECKED]: fullChecked,
  [VARIANT.PRESET]: fullPreset,
  [VARIANT.UNCHECKED]: fullUnchecked,
};

const mobileCheckboxMap = {
  [VARIANT.INDETERMINATE]: mobilePartial,
  [VARIANT.CHECKED]: mobileChecked,
  [VARIANT.PRESET]: mobilePreset,
  [VARIANT.UNCHECKED]: mobileUnchecked,
};

/**
 * Gets the correct SVG for a checkbox given a proper variant
 * @param {VARIANT} variant
 */
function useCheckboxSvg(variant) {
  const isMobile = useIsMobile();
  const checkboxMap = isMobile ? mobileCheckboxMap : fullCheckboxMap;

  return checkboxMap[variant] || checkboxMap[VARIANT.UNCHECKED];
}

export default useCheckboxSvg;
