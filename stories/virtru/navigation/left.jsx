import { storiesOf } from '@storybook/react';
import React from 'react';
import { HomeOutlined, SettingFilled } from '@ant-design/icons';
import { LeftNavigation, Menu } from '@';

const menuItems = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: 'settings',
    icon: <SettingFilled />,
    label: 'Settings',
  },
];

storiesOf('virtru/navigation', module).add('left', () => {
  return (
    <LeftNavigation mobileAdaptive>
      {menuItems.map((item) => {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        );
      })}
    </LeftNavigation>
  );
});
