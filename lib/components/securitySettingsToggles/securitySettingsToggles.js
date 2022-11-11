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
  settingText,
}) => {
  const [expirationChecked, setExpirationChecked] = useState(!!expirationDateTime);

  const triggerExpirationDateTimeChange = useCallback(
    (time) => {
      onChange?.('expirationDate', time?.toISOString() || null);
    },
    [onChange],
  );

  const toggleChangeHandler = useCallback(
    (name) => (checked) => {
      if (name === 'expirationDate') {
        setExpirationChecked(checked);

        if (!checked) {
          triggerExpirationDateTimeChange(null);
        }

        return;
      }
      onChange?.(name, checked);
    },
    [onChange, triggerExpirationDateTimeChange],
  );

  return (
    <>
      <ItemOption
        icon={<HourglassIcon />}
        name={settingText.securitySettingsToggles.expiration.label}
        hasValue={expirationChecked}
        disabled={disabled}
        tooltipTitle={settingText.securitySettingsToggles.expiration.tooltip}
        changeSwitch={toggleChangeHandler('expirationDate')}
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
            name={settingText.securitySettingsToggles.watermark.label}
            hasValue={watermark}
            disabled={disabled}
            tooltipTitle={settingText.securitySettingsToggles.watermark.tooltip}
            changeSwitch={toggleChangeHandler('watermark')}
          />

          <ItemOption
            icon={<PersistentProtectionIcon />}
            name={settingText.securitySettingsToggles.persistentProtection.label}
            hasValue={persistentProtection}
            disabled={disabled}
            tooltipTitle={settingText.securitySettingsToggles.persistentProtection.tooltip}
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
  settingText: PropTypes.shape({
    securitySettingsToggles: PropTypes.shape({
      expiration: PropTypes.shape({
        label: PropTypes.node,
        tooltip: PropTypes.node,
      }),
      watermark: PropTypes.shape({
        label: PropTypes.node,
        tooltip: PropTypes.node,
      }),
      persistentProtection: PropTypes.shape({
        label: PropTypes.node,
        tooltip: PropTypes.node,
      }),
    }),
  }),
};

SecuritySettingsToggles.defaultProps = {
  inModal: false,
  showFilesSettings: true,
  expirationDateTime: null,
  watermark: false,
  persistentProtection: false,
  disabled: false,
  onChange: undefined,
  settingText: {
    securitySettingsToggles: {
      expiration: {
        label: 'Expiration Date',
        tooltip:
          'After your specified time, your recipients will no longer have access to this message',
      },
      watermark: {
        label: 'Watermarking',
        tooltip:
          'Supported attachments will be watermarked in Secure Reader: PDF, DOCX, XLSX, PPTX, JPEG, JPG, and PNG',
      },
      persistentProtection: {
        label: 'Persistent File Protection',
        tooltip:
          "This setting protects files by requiring authentication even if it's shared or downloaded to a computer",
      },
    },
  },
};

export default SecuritySettingsToggles;
