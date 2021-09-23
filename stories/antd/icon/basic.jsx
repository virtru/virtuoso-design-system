import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

storiesOf('Components/Ant Design/Icon', module).add('basic', () => 
  <div className="icons-list">
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
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