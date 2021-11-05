import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Layout, Header, TopMenuDropdownWrap, Menu, TopMenuDropdown, CustomIconAvatar } from '@';

const menu = (
  <TopMenuDropdownWrap defaultSelectedKeys={['1']}>
    <Menu.ItemGroup key="users" title="Signed-in Users">
      <Menu.Item key="1" icon={<CustomIconAvatar />}>
        abc@virtru.com
      </Menu.Item>
      <Menu.Item key="2" icon={<CustomIconAvatar />}>
        xyz@virtru.com
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.Divider />
    <Menu.Item key="3">Sign in as different user</Menu.Item>
    <Menu.Item key="4">Sign out</Menu.Item>
  </TopMenuDropdownWrap>
);

storiesOf('virtru/layout', module).add(
  'top',
  () => (
    <Layout className="layout" style={{ width: '100%' }}>
      <Header appName="Control Center" homeUrl="/">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        <TopMenuDropdown menu={menu} activeUser="ksuchak@virtru.com" />
      </Header>

      <br />
      <Header appName="Control Center" homeUrl="/home">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>

      <br />
      <Header appName="Control " alignRight>
        <TopMenuDropdown menu={menu} activeUser="ksuchak@virtru.com" />
      </Header>
    </Layout>
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
