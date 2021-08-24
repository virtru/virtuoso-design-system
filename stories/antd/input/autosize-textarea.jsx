import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class Demo extends React.Component {
  state = {
    value: '',
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <TextArea placeholder="Autosize height based on content lines" autoSize />
        <div style={{ margin: '24px 0' }} />
        <TextArea
          placeholder="Autosize height with minimum and maximum number of lines"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
        <div style={{ margin: '24px 0' }} />
        <TextArea
          value={value}
          onChange={this.onChange}
          placeholder="Controlled autosize"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </>
    );
  }
}

storiesOf('antd/Input', module).add('autosize-textarea', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>autoSize</code> prop for a <code>textarea</code> type of <code>Input</code> makes the height to automatically adjust based on the content. An option object can be provided to <code>autoSize</code> to specify the minimum and maximum number of lines the textarea will automatically adjust.</p></>) } });