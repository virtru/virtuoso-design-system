import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Cascader } from 'antd';

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
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
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
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
];

function onChange(value, selectedOptions) {
  console.log(value, selectedOptions);
}

function filter(inputValue, path) {
  return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
}

storiesOf('antd/cascader', module).add('search', () => 
  <Cascader
    options={options}
    onChange={onChange}
    placeholder="Please select"
    showSearch={{ filter }}
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Search and select options directly.</p>
<blockquote>
  <p>Now, <code>Cascader[showSearch]</code> doesn't support search on server, more info <a href="https://github.com/ant-design/ant-design/issues/5547">#5547</a></p>
</blockquote></>) } });