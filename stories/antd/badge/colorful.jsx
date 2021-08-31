import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge, Divider } from 'antd';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

storiesOf('antd/badge', module).add('colorful', () => 
  <>
    <Divider orientation="left">Presets</Divider>
    <div>
      {colors.map(color => (
        <div key={color}>
          <Badge color={color} text={color} />
        </div>
      ))}
    </div>
    <Divider orientation="left">Custom</Divider>
    <div>
      <Badge color="#f50" text="#f50" />
      <br />
      <Badge color="#2db7f5" text="#2db7f5" />
      <br />
      <Badge color="#87d068" text="#87d068" />
      <br />
      <Badge color="#108ee9" text="#108ee9" />
    </div>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>We preset a series of colorful Badge styles for use in different situations. You can also set it to a hex color string for custom color.</p></>) } });