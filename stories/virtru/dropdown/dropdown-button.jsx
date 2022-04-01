import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Menu, Space, Tooltip, Dropdown } from '@';

const handleButtonClick = (e) => {
  alert('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick = (e) => {
  alert('Click on menu item.');
  console.log('click', e);
};

const menu = (
  <Menu onClick={handleMenuClick} defaultOpenKeys={['users']} mode="inline">
    <Menu.ItemGroup
      key="users"
      title="Signed-in Users"
      style={{ fontSize: '1.3rem', color: '#515864' }}
    >
      <Menu.Item key="1" icon={<UserOutlined />}>
        abc@virtru.com
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        xyz@virtru.com
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.Divider />
    <Menu.Item key="3">Sign in as different user</Menu.Item>
    <Menu.Item key="4">Sign out</Menu.Item>
  </Menu>
);

storiesOf('virtru/dropdown', module).add(
  'dropdown-button',
  () => (
    <Space wrap>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button
        overlay={menu}
        buttonsRender={([leftButton, rightButton]) => [
          <Tooltip title="tooltip" key="leftButton">
            {leftButton}
          </Tooltip>,
          React.cloneElement(rightButton, { loading: true }),
        ]}
      >
        With Tooltip
      </Dropdown.Button>
      <Dropdown overlay={menu}>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button>
          <UserOutlined />
          ksuchak@virtru.com
          <DownOutlined />
        </Button>
      </Dropdown>

      <Dropdown overlay={menu} trigger={['click']}>
        <Button type="text">
          <UserOutlined />
          <DownOutlined />
          ksuchak@virtru.com
        </Button>
      </Dropdown>
    </Space>
  ),
  {
    docs: {
      page: () => (
        <>
          <h1 id="ens">en-US</h1>
          <p>
            A button is on the left, and a related functional menu is on the right. You can set the
            icon property to modify the icon of right.
          </p>
        </>
      ),
    },
  },
);
