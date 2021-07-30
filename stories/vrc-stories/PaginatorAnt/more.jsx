/* eslint-disabled */
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import ReactDOM from 'react-dom';
import React from 'react';
import { Pagination } from 'antd';

storiesOf('PaginatorAnt', module).add('more', () => <Pagination defaultCurrent={6} total={500} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>More pages.</p></>) } });