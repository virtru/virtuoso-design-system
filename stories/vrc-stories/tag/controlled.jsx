import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tag, Button } from 'antd';

class Demo extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <>
        <Tag
          closable
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        >
          Movies
        </Tag>
        <br />
        <Button size="small" onClick={() => this.setState({ visible: !this.state.visible })}>
          Toggle
        </Button>
      </>
    );
  }
}

storiesOf('tag', module).add('controlled', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>By using the <code>visible</code> prop, you can control the close state of Tag.</p></>) } });