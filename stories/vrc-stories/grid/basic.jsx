import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Row, Col } from 'antd';

storiesOf('grid', module).add('basic', () => 
  <>
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>From the stack to the horizontal arrangement.</p>
<p>You can create a basic grid system by using a single set of <code>Row</code> and <code>Col</code> grid assembly, all of the columns (Col) must be placed in <code>Row</code>.</p></>) } });