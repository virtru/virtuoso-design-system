import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Checkbox } from 'antd';

storiesOf('Components/Ant Design/Checkbox', module).add('disabled', () => 
  <>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/checkbox/" target="_blank">
                  documentation on Checkbox component
                </a>.
              </>
            ) }
        });