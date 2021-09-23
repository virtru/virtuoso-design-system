import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}

storiesOf('Components/Ant Design/Calendar', module).add('basic', () => <Calendar onPanelChange={onPanelChange} />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/calendar/" target="_blank">
                  documentation on Calendar component
                </a>.
              </>
            ) }
        });