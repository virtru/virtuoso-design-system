import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Timeline, Button } from 'antd';

class PendingTimeLine extends React.Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };

  render() {
    return (
      <div>
        <Timeline pending="Recording..." reverse={this.state.reverse}>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
        <Button type="primary" style={{ marginTop: 16 }} onClick={this.handleClick}>
          Toggle Reverse
        </Button>
      </div>
    );
  }
}

storiesOf('timeline', module).add('pending', () => <PendingTimeLine />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>When the timeline is incomplete and ongoing, put a ghost node at last. Set <code>pending</code> as truthy value to enable displaying pending item. You can customize the pending content by passing a React Element. Meanwhile, <code>pendingDot=&#123;a React Element&#125;</code> is used to customize the dot of the pending item. <code>reverse=&#123;true&#125;</code> is used for reversing nodes.</p></>) } });