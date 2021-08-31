import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

storiesOf('antd/Input', module).add('search-input-loading', () => 
  <>
    <Search placeholder="input search loading default" loading />
    <br />
    <br />
    <Search placeholder="input search loading with enterButton" loading enterButton />
    <br />
    <br />
    <Search placeholder="input search text" enterButton="Search" size="large" loading />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Search loading when onSearch.</p></>) } });