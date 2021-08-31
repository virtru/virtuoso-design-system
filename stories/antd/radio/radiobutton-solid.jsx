import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Radio } from 'antd';

storiesOf('antd/radio', module).add('radiobutton-solid', () => 
  <>
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group defaultValue="c" buttonStyle="solid" style={{ marginTop: 16 }}>
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b" disabled>
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Solid radio button style.</p></>) } });