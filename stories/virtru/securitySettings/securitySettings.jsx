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
    const securitySettingChangeHandler = () => {
      // eslint-disable-next-line no-console
      console.log('securitySettingChangeHandler click');
    };

    return (
      <Row style={{ width: '100%' }}>
        <Col sspan={12} offset={6}>
          <SecuritySettingsToggles
            showFilesSettings={boolean('Show file settings', true)}
            expirationDateTime={null}
            watermark
            persistentProtection={false}
            disabled={boolean('Disabled', false)}
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
