import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

storiesOf('Components/Ant Design/Checkbox', module).add('basic', () => <Checkbox onChange={onChange}>Checkbox</Checkbox>, {
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