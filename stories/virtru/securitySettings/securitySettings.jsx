import React from 'react';
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import { SecuritySettingsToggles, Row, Col } from '@';

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
      // eslint-disable-next-line no-console
      console.log('securitySettingChangeHandler click');
    };

    return (
      <Row style={{ width: '100%' }}>
        <Col sspan={12} offset={6}>
          <SecuritySettingsToggles
            showFilesSettings={showFilesSettings}
            expirationDateTime={securitySettings.expirationDateTime}
            watermark={securitySettings.watermark}
            persistentProtection={securitySettings.persistentProtection}
            disabled={securitySettingsUpdating}
            onChange={securitySettingChangeHandler}
          />
        </Col>
      </Row>
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
