import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Empty } from 'antd';

storiesOf('empty', module).add('simple', () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can choose another style of <code>image</code> by setting image to <code>Empty.PRESENTED_IMAGE_SIMPLE</code>.</p></>) } });