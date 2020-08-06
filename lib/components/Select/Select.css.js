// TODO: deprecate this file's approach in favor of good ol' media queries
import { vds as designTokens } from '@/styles/build/js/design_tokens.js';

export default isMobile => ({
  container: (provided, { selectProps: { menuIsOpen } }) => ({
    ...provided,
    zIndex: menuIsOpen ? '2' : '1',
  }),

  input: provided => ({
    ...provided,
    margin: '0 0 0 3px',
    padding: '0',
    lineHeight: '1em',
    fontSize: isMobile ? '16px' : '13px',
  }),

  singleValue: provided => ({
    ...provided,
    fontFamily: designTokens.font.family.body.value,
    fontSize: isMobile ? '16px' : '13px',
  }),

  placeholder: provided => ({
    ...provided,
    fontFamily: designTokens.font.family.body.value,
    fontSize: isMobile ? '16px' : '13px',
    color: 'inherit',
    margin: '0 3px',
  }),

  menu: provided => ({
    ...provided,
    borderRadius: '3px',
    marginTop: '-4px',
    borderTopRightRadius: '0',
    borderTopLeftRadius: '0',
    boxShadow: 'none',
    border: `1px solid ${designTokens.color.blue.darkest.value}`,
    borderTop: 'none',
    zIndex: 'unset',
  }),

  control: (provided, { isFocused, selectProps: { isDisabled, menuIsOpen } }) => {
    const common = {
      cursor: 'pointer',
      boxShadow: 'none',
      transition: 'none',
      minHeight: isMobile ? '48px' : '34px',
      height: '100%',
    };

    const hover = {
      ...common,
      borderColor: designTokens.color.blue.darkest.value,
      color: designTokens.color.blue.darker.value,
      fill: designTokens.color.blue.darker.value,
    };

    const regular = {
      ...common,
      border: `1px solid ${menuIsOpen ? designTokens.color.blue.darkest.value : designTokens.color.slate.darker.value}`,
      borderRadius: '3px',
      color: designTokens.color.slate.darkest.value,
      fill: designTokens.color.slate.darkest.value,
    };

    const disabled = {
      ...regular,
      color: designTokens.color.slate.lighter.value,
      fill: designTokens.color.slate.lighter.value,
      borderColor: `${designTokens.color.slate.lighter.value} !important`,
      backgroundColor: designTokens.color.white.value,
    };

    let final = regular;
    if (isDisabled) {
      final = disabled;
    } else if (isFocused) {
      final = hover;
    }

    return {
      ...provided,
      ...final,
      '&:hover': hover,
    };
  },

  menuList: (provided, { selectProps: { menuIsOpen } }) => ({
    ...provided,
    padding: 0,
    borderBottomRightRadius: '3px',
    borderBottomLeftRadius: '3px',
    marginTop: menuIsOpen ? '3px' : 'initial',
  }),

  option: (provided, { isFocused }) => {
    const regular = {
      cursor: 'pointer',
      backgroundColor: designTokens.color.white.value,
      color: designTokens.color.slate.darkest.value,
      fontFamily: designTokens.font.family.body.value,
      fontSize: isMobile ? '16px' : '13px',
      padding: isMobile ? '12px 10px' : '8px 11px',
    };

    const hover = {
      ...regular,
      backgroundColor: designTokens.color.slate.lightest.value,
      color: designTokens.color.blue.darker.value,
    };

    return {
      ...provided,
      ...(isFocused ? hover : regular),
      '&:hover': hover,
      '&:active': {
        backgroundColor: designTokens.color.slate.lightest.value,
        color: designTokens.color.blue.darker.value,
      },
    };
  },

  dropdownIndicator: provided => ({
    ...provided,
    padding: isMobile ? '14px 9px' : '8px 9px',
  }),

  valueContainer: (provided, { selectProps: { isMulti }, hasValue }) => ({
    ...provided,
    padding: isMulti && hasValue ? '0' : '9px 8px',
  }),

  multiValue: provided => ({
    ...provided,
    borderRadius: '3px',
    backgroundColor: designTokens.color.blue.lightest.value,
    margin: '3px 0 3px 3px',
    padding: '0',
    '&:hover': {
      backgroundColor: designTokens.color.slate.lightest.value,
    },
  }),

  multiValueLabel: provided => ({
    ...provided,
    color: designTokens.color.blue.darker.value,
    fontSize: isMobile ? '16px' : '13px',
    paddingTop: '5px',
    paddingRight: '7px',
    paddingBottom: '5px',
    paddingLeft: '9px',
  }),

  clearIndicator: provided => ({
    ...provided,
    padding: '0',
  }),

  multiValueRemove: provided => ({
    ...provided,
    paddingLeft: '9px',
    paddingRight: '9px',
    '&:hover': {
      borderRadius: 0,
      backgroundColor: designTokens.color.slate.lightest.value,
    },
  }),

  indicatorsContainer: provided => ({
    ...provided,
    alignSelf: 'baseline',
    alignItems: 'baseline',
    height: '100%',
  }),
});
