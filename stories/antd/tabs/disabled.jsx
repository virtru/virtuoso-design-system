import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

storiesOf('tabs', module).add('disabled', () => 
  <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">
      Tab 1
    </TabPane>
    <TabPane tab="Tab 2" disabled key="2">
      Tab 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Tab 3
    </TabPane>
  </Tabs>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Disabled a tab.</p></>) } });