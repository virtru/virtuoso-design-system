import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Statistic, Row, Col } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

storiesOf('statistic', module).add('unit', () => 
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Add unit through <code>prefix</code> and <code>suffix</code>.</p></>) } });