import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Row, Col } from 'antd';

storiesOf('grid', module).add('offset', () => 
  <>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>offset</code> can set the column to the right side. For example, using <code>offset = &#123;4&#125;</code> can set the element shifted to the right four columns width.</p></>) } });