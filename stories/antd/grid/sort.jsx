import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Row, Col } from 'antd';

storiesOf('antd/grid', module).add('sort', () => 
  <Row>
    <Col span={18} push={6}>
      col-18 col-push-6
    </Col>
    <Col span={6} pull={18}>
      col-6 col-pull-18
    </Col>
  </Row>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>By using <code>push</code> and <code>pull</code> class you can easily change column order.</p></>) } });