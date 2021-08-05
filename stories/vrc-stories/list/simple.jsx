import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { List, Typography, Divider } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

storiesOf('list', module).add('simple', () => 
  <>
    <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <Divider orientation="left">Small Size</Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
    <Divider orientation="left">Large Size</Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Ant Design supports a default list size as well as a large and small size.</p>
<p>If a large or small list is desired, set the size property to either large or small respectively. Omit the size property for a list with the default size.</p>
<p>Customizing the header and footer of list by setting <code>header</code> and <code>footer</code> property.</p></>) } });