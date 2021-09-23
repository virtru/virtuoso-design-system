import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout from './layout';
import { Menu } from 'antd';

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <div style={{ width: '100%' }}>
    <Layout {...args}>Content Here</Layout>
  </div>
);

export const Simple = Template.bind({});

export const WithMenu = Template.bind({});
WithMenu.args = {
  sideMenu: (
    <Menu>
      <Menu.Item>One</Menu.Item>
      <Menu.Item>Two</Menu.Item>
      <Menu.Item>Three</Menu.Item>
    </Menu>
  ),
};
