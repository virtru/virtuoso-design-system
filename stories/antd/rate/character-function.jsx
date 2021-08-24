import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

storiesOf('rate', module).add('character-function', () => 
  <>
    <Rate defaultValue={2} character={({ index }) => index + 1} />
    <br />
    <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Can customize each character using <code>(RateProps) =&gt; ReactNode</code>.</p></>) } });