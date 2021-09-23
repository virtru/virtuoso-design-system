import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { message, Button } from 'antd';

const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

storiesOf('Components/Ant Design/Message', module).add('loading', () => <Button onClick={success}>Display a loading indicator</Button>, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/message/" target="_blank">
                  documentation on Message component
                </a>.
              </>
            ) }
        });