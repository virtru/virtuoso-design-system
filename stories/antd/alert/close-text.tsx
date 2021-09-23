import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Alert } from 'antd';

storiesOf('Components/Ant Design/Alert', module).add('close-text', () => <Alert message="Info Text" type="info" closeText="Close Now" />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/alert/" target="_blank">
                  documentation on Alert component
                </a>.
              </>
            ) }
        });