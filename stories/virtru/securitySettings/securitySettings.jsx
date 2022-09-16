import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { SecuritySettingsToggles } from '@';

storiesOf('virtru/securitySettings', module).add(
  'securitySettings',
  () => {
    const showFilesSettings = true;
    const securitySettings = {
      expirationDateTime: '13 Aug, 2022',
      watermark: true,
      persistentProtection: false,
    };

    const securitySettingsUpdating = false;
    const securitySettingChangeHandler = () => {
      console.log('securitySettingChangeHandler click');
    };

    return (
      <SecuritySettingsToggles
        showFilesSettings={showFilesSettings}
        expirationDateTime={securitySettings.expirationDateTime}
        watermark={securitySettings.watermark}
        persistentProtection={securitySettings.persistentProtection}
        disabled={securitySettingsUpdating}
        onChange={securitySettingChangeHandler}
      />
    );
  },
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>Custom Virtru spinner.</p>
        </>
      ),
    },
  },
);
