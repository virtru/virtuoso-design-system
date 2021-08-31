import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Card } from 'antd';

storiesOf('antd/card', module).add('inner', () => 
  <Card title="Card title">
    <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
  </Card>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>It can be placed inside the ordinary card to display the information of the multilevel structure.</p></>) } });