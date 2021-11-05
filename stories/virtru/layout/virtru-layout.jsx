import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { VirtruLayout, Layout, Header, Menu, TopMenuDropdown } from '@';

const { Sider, Content } = Layout;

const menu = (
  <Menu defaultOpenKeys={['users']}>
    <Menu.ItemGroup
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
    <Menu.Item key="3">Sign in as different user</Menu.Item>
    <Menu.Item key="4">Sign out</Menu.Item>
  </Menu>
);

storiesOf('virtru/layout', module).add(
  'virtru layout',
  () => (
    <VirtruLayout
      header={
        <Header appName="Control Center" alignRight>
          <TopMenuDropdown menu={menu} activeUser="ksuchak@virtru.com" />
        </Header>
      }
      sider={<Sider theme="light">Sider</Sider>}
      content={<Content>Content</Content>}
    />
  ),
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p>The most basic "header-content-footer" layout.</p>
          <p>
            Generally, the mainnav is placed at the top of the page, and includes the logo, the
            first level navigation, and the secondary menu (users, settings, notifications) from
            left to right in it. We always put contents in a fixed size navigation (eg:{' '}
            <code>1200px</code>), the layout of the whole page is stable, it`s not affected by
            viewing area.
          </p>
          <p>
            Top-bottom structure is conform with the top-bottom viewing habit, it`s a classical
            navigation pattern of websites. This pattern demonstrates efficiency in the main
            workarea, while using some vertical space. And because the horizontal space of the
            navigation is limited, this pattern is not suitable for cases when the first level
            navigation contains many elements or links.
          </p>
        </>
      ),
    },
  },
);
