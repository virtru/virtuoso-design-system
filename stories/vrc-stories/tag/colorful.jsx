import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tag, Divider } from 'antd';

storiesOf('tag', module).add('colorful', () => 
  <>
    <Divider orientation="left">Presets</Divider>
    <div>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </div>
    <Divider orientation="left">Custom</Divider>
    <div>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </div>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>We preset a series of colorful tag styles for use in different situations. You can also set it to a hex color string for custom color.</p></>) } });