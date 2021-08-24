import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Checkbox, Row, Col } from 'antd';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

storiesOf('antd/checkbox', module).add('layout', () => 
  <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row>
      <Col span={8}>
        <Checkbox value="A">A</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">B</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">C</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">D</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">E</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>We can use Checkbox and Grid in Checkbox.Group, to implement complex layout.</p></>) } });