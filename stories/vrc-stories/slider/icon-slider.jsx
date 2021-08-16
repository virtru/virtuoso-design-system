import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Slider } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

class IconSlider extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
    return (
      <div className="icon-wrapper">
        <FrownOutlined className={preColorCls} />
        <Slider {...this.props} onChange={this.handleChange} value={value} />
        <SmileOutlined className={nextColorCls} />
      </div>
    );
  }
}

storiesOf('slider', module).add('icon-slider', () => <IconSlider min={0} max={20} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can add an icon beside the slider to make it meaningful.</p></>) } });