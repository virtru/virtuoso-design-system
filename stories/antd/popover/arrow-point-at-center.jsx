import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popover, Button } from 'antd';

const content = (
  <>
    <p>Content</p>
    <p>Content</p>
  </>
);

storiesOf('Components/Ant Design/Popover', module).add('arrow-point-at-center', () => 
  <>
    <Popover placement="topLeft" title="Title" content={content}>
      <Button>Align edge / 边缘对齐</Button>
    </Popover>
    <Popover placement="topLeft" title="Title" content={content} arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Popover>
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/popover/" target="_blank">
                  documentation on Popover component
                </a>.
              </>
            ) }
        });