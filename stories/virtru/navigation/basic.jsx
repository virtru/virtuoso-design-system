import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Navigation, NavItem } from '@';

const antIcon = <LoadingOutlined style={{ fontSize: 15 }} spin />;

storiesOf('virtru/navigation', module).add('basic', () => {
  const loading = true;
  return (
    <Navigation>
      <NavItem loading={loading} icon={loading ? <Spin indicator={antIcon} /> : null}>
        Loading nav item
      </NavItem>
      <NavItem>regular nav item</NavItem>
      <NavItem>another regular nav item</NavItem>
    </Navigation>
  );
});
