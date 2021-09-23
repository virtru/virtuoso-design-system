import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tooltip, Button } from 'antd';

storiesOf('Components/Ant Design/Tooltip', module).add('arrow-point-at-center', () => 
  <>
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button>Align edge / 边缘对齐</Button>
    </Tooltip>
    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Tooltip>
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/tooltip/" target="_blank">
                  documentation on Tooltip component
                </a>.
              </>
            ) }
        });