import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { AutoComplete } from 'antd';

const options = [
  { value: 'Burns Bay Road' },
  { value: 'Downing Street' },
  { value: 'Wall Street' },
];

const Complete: React.FC = () => (
  <AutoComplete
    style={{ width: 200 }}
    options={options}
    placeholder="try to type `b`"
    filterOption={(inputValue, option) =>
      option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

storiesOf('auto-complete', module).add('non-case-sensitive', () => <Complete />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A non-case-sensitive AutoComplete</p></>) } });