import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Statistic, Row, Col, Button } from 'antd';

storiesOf('statistic', module).add('basic', () => 
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Recharge
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} loading />
    </Col>
  </Row>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Simplest Usage.</p></>) } });