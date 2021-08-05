import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Empty } from 'antd';

storiesOf('empty', module).add('description', () => <Empty description={false} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Simplest Usage with no description.</p></>) } });