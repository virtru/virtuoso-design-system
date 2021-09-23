import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

storiesOf('Components/Ant Design/Input', module).add('size', () => 
  <>
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="default size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/input/" target="_blank">
                  documentation on Input component
                </a>.
              </>
            ) }
        });