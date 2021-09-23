import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

storiesOf('Components/Ant Design/Icon', module).add('two-tone', () => 
  <div className="icons-list">
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </div>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/icon/" target="_blank">
                  documentation on Icon component
                </a>.
              </>
            ) }
        });