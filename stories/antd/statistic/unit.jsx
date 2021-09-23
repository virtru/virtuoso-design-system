import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Statistic, Row, Col } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

storiesOf('Components/Ant Design/Statistic', module).add('unit', () => 
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/statistic/" target="_blank">
                  documentation on Statistic component
                </a>.
              </>
            ) }
        });