import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tag, Divider } from 'antd';

storiesOf('Components/Ant Design/Tag', module).add('colorful-inverse', () => 
  <>
    <Divider orientation="left">Presets Inverse</Divider>
    <div>
      <Tag color="magenta-inverse">magenta</Tag>
      <Tag color="red-inverse">red</Tag>
      <Tag color="volcano-inverse">volcano</Tag>
      <Tag color="orange-inverse">orange</Tag>
      <Tag color="gold-inverse">gold</Tag>
      <Tag color="lime-inverse">lime</Tag>
      <Tag color="green-inverse">green</Tag>
      <Tag color="cyan-inverse">cyan</Tag>
      <Tag color="blue-inverse">blue</Tag>
      <Tag color="geekblue-inverse">geekblue</Tag>
      <Tag color="purple-inverse">purple</Tag>
    </div>
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