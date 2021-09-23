import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

storiesOf('Components/Ant Design/Switch', module).add('basic', () => <Switch defaultChecked onChange={onChange} />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/switch/" target="_blank">
                  documentation on Switch component
                </a>.
              </>
            ) }
        });