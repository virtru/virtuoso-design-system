import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

storiesOf('Components/Ant Design/Input', module).add('password-input', () => 
  <Space direction="vertical">
    <Input.Password placeholder="input password" />
    <Input.Password
      placeholder="input password"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
  </Space>,
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