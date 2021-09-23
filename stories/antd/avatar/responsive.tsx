import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

storiesOf('Components/Ant Design/Avatar', module).add('responsive', () => 
  <Avatar
    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
    icon={<AntDesignOutlined />}
  />,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/avatar/" target="_blank">
                  documentation on Avatar component
                </a>.
              </>
            ) }
        });