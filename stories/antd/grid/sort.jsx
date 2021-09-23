import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Row, Col } from 'antd';

storiesOf('Components/Ant Design/Grid', module).add('sort', () => 
  <Row>
    <Col span={18} push={6}>
      col-18 col-push-6
    </Col>
    <Col span={6} pull={18}>
      col-6 col-pull-18
    </Col>
  </Row>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/grid/" target="_blank">
                  documentation on Grid component
                </a>.
              </>
            ) }
        });