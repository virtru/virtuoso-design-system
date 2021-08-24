import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tabs, Radio, Space } from 'antd';

const { TabPane } = Tabs;

class Demo extends React.Component {
  state = {
    tabPosition: 'left',
  };

  changeTabPosition = e => {
    this.setState({ tabPosition: e.target.value });
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <>
        <Space style={{ marginBottom: 24 }}>
          Tab position:
          <Radio.Group value={tabPosition} onChange={this.changeTabPosition}>
            <Radio.Button value="top">top</Radio.Button>
            <Radio.Button value="bottom">bottom</Radio.Button>
            <Radio.Button value="left">left</Radio.Button>
            <Radio.Button value="right">right</Radio.Button>
          </Radio.Group>
        </Space>
        <Tabs tabPosition={tabPosition}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </>
    );
  }
}

storiesOf('antd/tabs', module).add('position', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Tab's position: left, right, top or bottom. Will auto switch to <code>top</code> in mobile.</p></>) } });