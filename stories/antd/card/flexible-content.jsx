import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

storiesOf('antd/card', module).add('flexible-content', () => 
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can use <code>Card.Meta</code> to support more flexible content.</p></>) } });