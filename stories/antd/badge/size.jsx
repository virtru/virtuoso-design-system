import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from 'antd';

storiesOf('Components/Ant Design/Badge', module).add('size', () => 
  <>
    <Badge size="default" count={5}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge size="small" count={5}>
      <a href="#" className="head-example" />
    </Badge>
  </>,
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