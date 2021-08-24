import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

storiesOf('antd/switch', module).add('text', () => 
  <>
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>With text and icon.</p></>) } });