import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Rate } from 'antd';

storiesOf('antd/rate', module).add('disabled', () => <Rate disabled defaultValue={2} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Read only, can't use mouse to interact.</p></>) } });