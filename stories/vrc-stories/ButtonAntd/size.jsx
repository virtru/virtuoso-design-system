import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

class ButtonSize extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <br />
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
      </>
    );
  }
}

storiesOf('ButtonAntd', module).add('size', () => <ButtonSize />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Ant Design supports a default button size as well as a large and small size.</p>
<p>If a large or small button is desired, set the <code>size</code> property to either <code>large</code> or <code>small</code> respectively. Omit the <code>size</code> property for a button with the default size.</p></>) } });