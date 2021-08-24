import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Row, Col } from 'antd';

storiesOf('antd/grid', module).add('responsive-more', () => 
  <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
  </Row>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>span</code> <code>pull</code> <code>push</code> <code>offset</code> <code>order</code> property can be embedded into <code>xs</code> <code>sm</code> <code>md</code> <code>lg</code> <code>xl</code> <code>xxl</code> properties to use, where <code>xs=&#123;6&#125;</code> is equivalent to <code>xs=&#123;&#123;span: 6&#125;&#125;</code>.</p></>) } });