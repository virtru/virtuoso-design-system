import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { message, Button } from 'antd';

const success = () => {
  message.success({
    content: 'This is a prompt message with custom className and style',
    className: 'custom-class',
    style: {
      marginTop: '20vh',
    },
  });
};

storiesOf('Components/Ant Design/Message', module).add('custom-style', () => <Button onClick={success}>Customized style</Button>, {
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