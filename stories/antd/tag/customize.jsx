import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tag } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

storiesOf('Components/Ant Design/Tag', module).add('customize', () => 
  <>
    <Tag closable closeIcon="关 闭">
      Tag1
    </Tag>
    <Tag closable closeIcon={<CloseCircleOutlined />}>
      Tag2
    </Tag>
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/tag/" target="_blank">
                  documentation on Tag component
                </a>.
              </>
            ) }
        });