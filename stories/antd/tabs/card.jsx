import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

storiesOf('antd/tabs', module).add('card', () => 
  <Tabs onChange={callback} type="card">
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Another type of Tabs, which doesn't support vertical mode.</p></>) } });