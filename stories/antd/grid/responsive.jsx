import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Row, Col } from 'antd';

storiesOf('antd/grid', module).add('responsive', () => 
  <Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      Col
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
  </Row>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Referring to the Bootstrap <a href="http://getbootstrap.com/css/#grid-media-queries">responsive design</a>, here preset six dimensions: <code>xs</code> <code>sm</code> <code>md</code> <code>lg</code> <code>xl</code> <code>xxl</code>.</p></>) } });