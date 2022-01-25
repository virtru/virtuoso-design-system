import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Navigation, Menu } from '@';

const antIcon = <LoadingOutlined style={{ fontSize: 15 }} spin />;
const navItems = [
  {
    appName: 'Selected',
    path: '/selected',
    push: '/selected',
    key: '/selected',
  },
  {
    appName: 'Loading',
    path: '/loading',
    key: '/loading',
  },
  {
    appName: 'Static',
    path: '/static',
    key: '/static',
  },
];

storiesOf('virtru/navigation', module).add('basic', () => {
  const loading = true;
  const active = '/loading';

  return (
    <Navigation activeKey={active} defaultSelectedKeys={['/selected']}>
      <Menu.ItemGroup title="Item group">
        {navItems.map((app) => {
          return (
            <Menu.Item key={app.key} className={loading && active === app.key ? 'loading' : ''}>
              {loading && active === app.key && <Spin indicator={antIcon} />}
              <a className={loading && active === app.key ? 'navLink' : ''} href={app.path}>
                {app.appName}
              </a>
            </Menu.Item>
          );
        })}
      </Menu.ItemGroup>
    </Navigation>
  );
});
