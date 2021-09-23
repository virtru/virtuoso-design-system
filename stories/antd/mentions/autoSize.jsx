import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Mentions } from 'antd';

const { Option } = Mentions;

storiesOf('Components/Ant Design/Mentions', module).add('autoSize', () => 
  <Mentions autoSize style={{ width: '100%' }}>
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/mentions/" target="_blank">
                  documentation on Mentions component
                </a>.
              </>
            ) }
        });