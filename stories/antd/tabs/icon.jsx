import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

storiesOf('antd/tabs', module).add('icon', () => 
  <Tabs defaultActiveKey="2">
    <TabPane
      tab={
        <span>
          <AppleOutlined />
          Tab 1
        </span>
      }
      key="1"
    >
      Tab 1
    </TabPane>
    <TabPane
      tab={
        <span>
          <AndroidOutlined />
          Tab 2
        </span>
      }
      key="2"
    >
      Tab 2
    </TabPane>
  </Tabs>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The Tab with Icon.</p></>) } });