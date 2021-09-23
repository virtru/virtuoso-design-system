import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch } from 'antd';

storiesOf('Components/Ant Design/Switch', module).add('loading', () => 
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>,
  {
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