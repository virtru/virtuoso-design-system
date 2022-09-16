import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import {
  HourglassIcon,
  WatermarkIcon,
  ExpirationPicker,
  ItemOption,
  PersistentProtectionIcon,
} from '@';

import styles from './securitySettingsToggles.css';

const SecuritySettingsToggles = ({
  inModal,
  showFilesSettings,
  expirationDateTime,
  watermark,
  persistentProtection,
  disabled,
  onChange,
}) => {
  const [expirationChecked, setExpirationChecked] = useState(!!expirationDateTime);

  const triggerExpirationDateTimeChange = useCallback(
    (time) => {
      onChange?.('expirationDateTime', time);
    },
    [onChange],
  );

  const expirationToggleChangeHandler = useCallback(
    (checked) => {
      setExpirationChecked(checked);

      if (!checked) {
        triggerExpirationDateTimeChange(null);
      }
    },
    [triggerExpirationDateTimeChange],
  );

  const toggleChangeHandler = useCallback(
    (name) => (checked) => {
      onChange?.(name, checked);
    },
    [onChange],
  );

  return (
    <>
      <ItemOption
        icon={<HourglassIcon />}
        name="Expiration Date"
        hasValue={expirationChecked}
        disabled={disabled}
        tooltipTitle="components.securitySettingsToggles.expiration.tooltip"
        changeSwitch={expirationToggleChangeHandler}
        placementTooltip="top"
      />
      {expirationChecked &&
        (inModal ? (
          <div className={styles.expirationPickerWrap}>
            <ExpirationPicker
              isModal
              expDateTime={expirationDateTime?.toString()}
              getTime={triggerExpirationDateTimeChange}
            />
          </div>
        ) : (
          <ExpirationPicker
            expDateTime={expirationDateTime?.toString()}
            getTime={triggerExpirationDateTimeChange}
          />
        ))}

      {showFilesSettings && (
        <>
          <ItemOption
            icon={<WatermarkIcon />}
            name="Watermarking"
            hasValue={watermark}
            disabled={disabled}
            tooltipTitle="components.securitySettingsToggles.watermark.tooltip"
            changeSwitch={toggleChangeHandler('watermark')}
          />

          <ItemOption
            icon={<PersistentProtectionIcon />}
            name="Persistent File Protection"
            hasValue={persistentProtection}
            disabled={disabled}
            tooltipTitle="components.securitySettingsToggles.persistentProtection.tooltip"
            changeSwitch={toggleChangeHandler('persistentProtection')}
          />
        </>
      )}
    </>
  );
};

SecuritySettingsToggles.propTypes = {
  inModal: PropTypes.bool,
  showFilesSettings: PropTypes.bool,
  expirationDateTime: PropTypes.string,
  watermark: PropTypes.bool,
  persistentProtection: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

SecuritySettingsToggles.defaultProps = {
  inModal: false,
  showFilesSettings: true,
  expirationDateTime: null,
  watermark: false,
  persistentProtection: false,
  disabled: false,
  onChange: undefined,
};

export default SecuritySettingsToggles;
