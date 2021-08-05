import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Rater extends React.Component {
  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    );
  }
}

storiesOf('rate', module).add('text', () => <Rater />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Add copywriting in rate components.</p></>) } });