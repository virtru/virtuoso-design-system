import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, Menu, Dropdown } from 'antd';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

storiesOf('antd/button', module).add('multiple', () => 
  <>
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into <a href="/components/dropdown/#components-dropdown-demo-dropdown-button">Dropdown.Button</a>.</p></>) } });