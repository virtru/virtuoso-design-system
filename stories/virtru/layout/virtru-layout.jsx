import React from 'react';
import { Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import {
  VirtruLayout,
  Layout,
  Header,
  Menu,
  TopMenuDropdown,
  TopMenuDropdownWrap,
  CustomIconAvatar,
  LeftNavigation,
} from '@';

import { ReactComponent as SendIcon } from '@/assets/send-24.svg';
import { ReactComponent as InboxIcon } from '@/assets/inbox-24.svg';

import 'antd/dist/antd.less';

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

const sidebar = (
  <LeftNavigation
    items={[
      {
        key: 'outbound',
        icon: <SendIcon />,
        label: <Link to="/">Send</Link>,
      },
      {
        key: 'inbound',
        icon: <InboxIcon />,
        label: <Link to="/">Request</Link>,
      },
    ]}
  />
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
      sider={sidebar}
      content={<Layout.Content>Content</Layout.Content>}
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
