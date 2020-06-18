import { colors, text } from 'virtru-design-params/src';

export default isMobile => ({
  container: (provided, { selectProps: { menuIsOpen } }) => ({
    ...provided,
    zIndex: menuIsOpen ? '2' : '1',
  }),

  input: provided => ({
    ...provided,
    margin: '0 0 0 3px',
    padding: '0',
    lineHeight: '1rem',
    fontSize: isMobile ? '16px' : '13px',
  }),

  singleValue: provided => ({
    ...provided,
    fontFamily: text.fontPrimary,
    fontSize: isMobile ? '16px' : '13px',
  }),

  placeholder: provided => ({
    ...provided,
    fontFamily: text.fontPrimary,
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
    border: `1px solid ${colors.blueDarkest}`,
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
      borderColor: colors.blueDarkest,
      color: colors.blueDarker,
      fill: colors.blueDarker,
    };

    const regular = {
      ...common,
      border: `1px solid ${menuIsOpen ? colors.blueDarkest : colors.slateDarker}`,
      borderRadius: '3px',
      color: colors.slateDarkest,
      fill: colors.slateDarkest,
    };

    const disabled = {
      ...regular,
      color: colors.slateLighter,
      fill: colors.slateLighter,
      borderColor: `${colors.slateLighter} !important`,
      backgroundColor: colors.white,
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
      backgroundColor: colors.white,
      color: colors.slateDarkest,
      fontFamily: text.fontPrimary,
      fontSize: isMobile ? '16px' : '13px',
      padding: isMobile ? '12px 10px' : '8px 11px',
    };

    const hover = {
      ...regular,
      backgroundColor: colors.slateLightest,
      color: colors.blueDarker,
    };

    return {
      ...provided,
      ...(isFocused ? hover : regular),
      '&:hover': hover,
      '&:active': {
        backgroundColor: colors.slateLightest,
        color: colors.blueDarker,
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
    backgroundColor: colors.blueLightest,
    margin: '3px 0 3px 3px',
    padding: '0',
    '&:hover': {
      backgroundColor: colors.slateLightest,
    },
  }),

  multiValueLabel: provided => ({
    ...provided,
    color: colors.blueDarker,
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
      backgroundColor: colors.slateLightest,
    },
  }),

  indicatorsContainer: provided => ({
    ...provided,
    alignSelf: 'baseline',
    height: '100%',
  }),
});
