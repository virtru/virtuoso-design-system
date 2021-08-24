import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Demo = () => (
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

storiesOf('antd/tabs', module).add('centered', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Centered tabs.</p></>) } });