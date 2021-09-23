import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popover, Button } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

storiesOf('Components/Ant Design/Popover', module).add('basic', () => 
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>,
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