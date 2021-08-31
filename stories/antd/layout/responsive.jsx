import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

storiesOf('antd/layout', module).add('responsive', () => 
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Layout.Sider supports responsive layout.</p>
<blockquote>
  <p>Note: You can get a responsive layout by setting <code>breakpoint</code>, the Sider will collapse to the width of <code>collapsedWidth</code> when window width is below the <code>breakpoint</code>. And a special trigger will appear if the <code>collapsedWidth</code> is set to 0.</p>
</blockquote></>) } });