import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

storiesOf('Components/Ant Design/Timeline', module).add('alternate', () => 
  <Timeline mode="alternate">
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo.
    </Timeline.Item>
    <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Technical testing 2015-09-01
    </Timeline.Item>
  </Timeline>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/timeline/" target="_blank">
                  documentation on Timeline component
                </a>.
              </>
            ) }
        });