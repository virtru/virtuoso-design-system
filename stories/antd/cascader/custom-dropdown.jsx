import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Cascader, Divider } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

function dropdownRender(menus) {
  return (
    <div>
      {menus}
      <Divider style={{ margin: 0 }} />
      <div style={{ padding: 8 }}>The footer is not very short.</div>
    </div>
  );
}

storiesOf('cascader', module).add('custom-dropdown', () => 
  <Cascader options={options} dropdownRender={dropdownRender} placeholder="Please select" />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Customize the dropdown menu via <code>dropdownRender</code>.</p></>) } });