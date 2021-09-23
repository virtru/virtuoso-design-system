import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Slider } from 'antd';

function formatter(value) {
  return `${value}%`;
}

storiesOf('Components/Ant Design/Slider', module).add('tip-formatter', () => 
  <>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/slider/" target="_blank">
                  documentation on Slider component
                </a>.
              </>
            ) }
        });