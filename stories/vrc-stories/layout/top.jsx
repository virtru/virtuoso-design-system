import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from '../../../lib/assets/logo.svg';

const { Header, Content, Footer } = Layout;

storiesOf('layout', module).add('top', () => 
  <Layout className="layout">
    <Header><div style={{display: 'flex', alignItems: 'center'}}>
      <Logo style={{fill: 'white', height: '20px'}}/> 
      <div style={{height: '25px', margin: '0 0 0 12px', width: '1px', background: 'white'}}></div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key={0}><span style={{fontWeight: '500'}}>Control Center</span></Menu.Item>
      </Menu> </div>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The most basic "header-content-footer" layout.</p>
<p>Generally, the mainnav is placed at the top of the page, and includes the logo, the first level navigation, and the secondary menu (users, settings, notifications) from left to right in it. We always put contents in a fixed size navigation (eg: <code>1200px</code>), the layout of the whole page is stable, it's not affected by viewing area.</p>
<p>Top-bottom structure is conform with the top-bottom viewing habit, it's a classical navigation pattern of websites. This pattern demonstrates efficiency in the main workarea, while using some vertical space. And because the horizontal space of the navigation is limited, this pattern is not suitable for cases when the first level navigation contains many elements or links.</p></>) } });