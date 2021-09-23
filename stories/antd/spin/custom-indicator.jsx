import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

storiesOf('Components/Ant Design/Spin', module).add('custom-indicator', () => <Spin indicator={antIcon} />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/spin/" target="_blank">
                  documentation on Spin component
                </a>.
              </>
            ) }
        });