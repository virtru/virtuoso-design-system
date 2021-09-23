import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tooltip, Progress } from 'antd';

storiesOf('Components/Ant Design/Progress', module).add('segment', () => 
  <>
    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent={60} success={{ percent: 30 }} />
    </Tooltip>

    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent={60} success={{ percent: 30 }} type="circle" />
    </Tooltip>

    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent={60} success={{ percent: 30 }} type="dashboard" />
    </Tooltip>
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/progress/" target="_blank">
                  documentation on Progress component
                </a>.
              </>
            ) }
        });