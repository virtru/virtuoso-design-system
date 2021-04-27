import React from 'react';

import UserDropdown from './UserDropdown';

export default {
  component: UserDropdown,
  title: 'User Dropdown',
};

const Template = (args) => <UserDropdown {...args} />;

export const Default = Template.bind(
  {},
  {
    userId: 'example@xmail.com',
    isOpen: false,
    handleClick: () => null,
    handleLogout: () => null,
  },
);

export const Opened = Template.bind(
  {},
  {
    userId: 'example@xmail.com',
    isOpen: true,
    handleClick: () => null,
    handleLogout: () => null,
  },
);
