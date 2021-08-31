import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

storiesOf('antd/spin', module).add('custom-indicator', () => <Spin indicator={antIcon} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Use custom loading indicator.</p></>) } });