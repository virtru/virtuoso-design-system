import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from 'antd';

storiesOf('Components/Ant Design/Badge', module).add('title', () => 
  <div>
    <Badge count={5} title="Custom hover text">
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={-5} title="Negative">
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/badge/" target="_blank">
                  documentation on Badge component
                </a>.
              </>
            ) }
        });