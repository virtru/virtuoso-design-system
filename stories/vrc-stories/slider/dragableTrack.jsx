import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Slider } from 'antd';

storiesOf('slider', module).add('dragableTrack', () => <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Make range track draggable when set <code>range.draggableTrack</code>.</p></>) } });