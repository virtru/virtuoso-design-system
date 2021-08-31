import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

const defaultValue =
  'The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows. The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows.';

class Demo extends React.Component {
  state = {
    autoResize: false,
  };

  render() {
    const { autoResize } = this.state;

    return (
      <>
        <Button
          onClick={() => this.setState({ autoResize: !autoResize })}
          style={{ marginBottom: 16 }}
        >
          Auto Resize: {String(autoResize)}
        </Button>
        <TextArea rows={4} autoSize={autoResize} defaultValue={defaultValue} />
        <TextArea allowClear style={{ width: 93 }} />
      </>
    );
  }
}

storiesOf('antd/Input', module).add('textarea-resize', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>For multi-line input.</p></>) } });