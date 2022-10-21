import React from 'react';
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { SecuritySettingsToggles, Row, Col } from '@';

export default {
  title: 'With security settings',
  decorators: [withKnobs],
};

storiesOf('virtru/securitySettings', module).add(
  'securitySettings',
  () => {
    const showFilesSettings = true;
    const securitySettings = {
      expirationDateTime: null,
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
            watermark={boolean('Watermark', false)}
            persistentProtection={boolean('PFP', true)}
            disabled={securitySettingsUpdating}
            onChange={securitySettingChangeHandler}
          />
        </Col>
      </Row>
    );
  },
  {
    docs: {
      page: null,
    },
  },
);
