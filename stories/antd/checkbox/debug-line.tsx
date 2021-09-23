import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Checkbox, Radio, Space } from 'antd';

const sharedStyle: React.CSSProperties = {
  border: '1px solid red',
  marginBottom: 16,
};

storiesOf('Components/Ant Design/Checkbox', module).add('debug-line', () => 
  <div>
    <Space style={sharedStyle} align="center">
      <Checkbox value="light" />
      <div>Bamboo</div>
      <Checkbox value="little">Little</Checkbox>
    </Space>

    <Space style={sharedStyle} align="center">
      <Radio value="light" />
      <div>Bamboo</div>
      <Radio value="little">Little</Radio>
    </Space>

    <div
      style={{
        ...sharedStyle,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Checkbox value="light" />
      <div>Bamboo</div>
      <Checkbox value="little">Little</Checkbox>
    </div>

    <div
      style={{
        ...sharedStyle,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Radio value="light" />
      <div>Bamboo</div>
      <Radio value="little">Little</Radio>
    </div>
  </div>,
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