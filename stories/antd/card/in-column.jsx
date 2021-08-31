import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Card, Col, Row } from 'antd';

storiesOf('antd/card', module).add('in-column', () => 
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Cards usually cooperate with grid column layout in overview page.</p></>) } });