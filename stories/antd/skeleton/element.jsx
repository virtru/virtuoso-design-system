import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Skeleton, Space, Divider, Switch, Form, Radio } from 'antd';

class Demo extends React.Component {
  state = {
    active: false,
    size: 'default',
    buttonShape: 'default',
    avatarShape: 'circle',
  };

  handleActiveChange = checked => {
    this.setState({ active: checked });
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  handleShapeChange = prop => e => {
    this.setState({ [prop]: e.target.value });
  };

  render() {
    const { active, size, buttonShape, avatarShape } = this.state;
    return (
      <>
        <Space>
          <Skeleton.Button active={active} size={size} shape={buttonShape} />
          <Skeleton.Button active={active} size={size} shape={buttonShape} />
          <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
          <Skeleton.Input style={{ width: 200 }} active={active} size={size} />
        </Space>
        <br />
        <br />
        <Skeleton.Image />
        <Divider />
        <Form layout="inline" style={{ margin: '16px 0' }}>
          <Form.Item label="Active">
            <Switch checked={active} onChange={this.handleActiveChange} />
          </Form.Item>
          <Form.Item label="Size">
            <Radio.Group value={size} onChange={this.handleSizeChange}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Button Shape">
            <Radio.Group value={buttonShape} onChange={this.handleShapeChange('buttonShape')}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="round">Round</Radio.Button>
              <Radio.Button value="circle">Circle</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Avatar Shape">
            <Radio.Group value={avatarShape} onChange={this.handleShapeChange('avatarShape')}>
              <Radio.Button value="square">Square</Radio.Button>
              <Radio.Button value="circle">Circle</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
      </>
    );
  }
}

storiesOf('antd/skeleton', module).add('element', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Skeleton Button, Avatar, Input and Image.</p></>) } });