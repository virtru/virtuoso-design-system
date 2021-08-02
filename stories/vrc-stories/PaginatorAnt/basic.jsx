import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from 'antd';

storiesOf('PaginatorAnt', module).add('basic', () => <Pagination defaultCurrent={1} total={50} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Basic pagination.</p></>) } });