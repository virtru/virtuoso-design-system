import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from 'antd';

storiesOf('antd/button', module).add('basic', () => 
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button, <code>text</code> button and <code>link</code> button in antd.</p></>) } });