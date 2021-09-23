import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout as AntLayout, Menu, Dropdown, Button } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  DownOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import AppDrawer from './app-drawer/app-drawer';
import Logo from '../logo';
import './layout.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = AntLayout;

/**
 *
 * @param {*} currentUser
 * @returns
 */
function renderUserActionMenu(currentUser, handleMenuClick) {
  const UserMenu = (
    <Menu onClick={handleMenuClick} defaultOpenKeys={['users']} mode="inline">
      {/* <Menu.ItemGroup
        key="users"
        title="Signed-in Users"
        style={{ fontSize: '1.3rem', color: 'black' }}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          abc@virtru.com
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          xyz@virtru.com
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item key="3">Sign in as different user</Menu.Item> */}
      <Menu.Item key="4">Sign out</Menu.Item>
    </Menu>
  );

  if (!currentUser) {
    return <Button>Sign in</Button>;
  }
  return (
    <Dropdown overlay={UserMenu} trigger={['click']} className="vds-layout-header-user">
      <Button className="vds-layout-header-user-button">
        {currentUser.name} <DownOutlined />
      </Button>
    </Dropdown>
  );
}

/**
 *
 * @returns
 */
export default function Layout({ children, handleMenuClick, currentUser, sideMenu }) {
  const appDrawerState = useState(false);

  return (
    <AppDrawer.Context.Provider value={appDrawerState}>
      <AntLayout>
        <Header>
          <div className="vds-layout-header-appDrawer">
            <AppDrawer.Handle className="vds-layout-header-appDrawer" />
          </div>
          <div className="vds-layout-header-logo">
            <Logo />
          </div>
          <div className="vds-layout-header-appname">Control Center</div>
          <div className="vds-layout-header-userAction">
            {renderUserActionMenu(currentUser, handleMenuClick)}
          </div>
        </Header>
        <AntLayout>
          {sideMenu ? <Sider width={200}>{sideMenu}</Sider> : null}
          <AntLayout style={{ padding: '0 24px 24px', background: '#fff' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <AppDrawer />
              {children}
            </Content>
          </AntLayout>
        </AntLayout>
      </AntLayout>
    </AppDrawer.Context.Provider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  handleMenuClick: PropTypes.func,
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Layout.defaultProps = {
  currentUser: null,
  handleMenuClick: null,
};
