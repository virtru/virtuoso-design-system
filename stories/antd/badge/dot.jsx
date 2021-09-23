import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

storiesOf('Components/Ant Design/Badge', module).add('dot', () => 
  <div>
    <Badge dot>
      <NotificationOutlined />
    </Badge>
    <Badge count={0} dot>
      <NotificationOutlined />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
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