import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tabs, Radio } from 'antd';

const { TabPane } = Tabs;

class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
          {[...Array.from({ length: 30 }, (v, i) => i)].map(i => (
            <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
              Content of tab {i}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

storiesOf('antd/tabs', module).add('slide', () => <SlidingTabsDemo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>In order to fit in more tabs, they can slide left and right (or up and down).</p></>) } });