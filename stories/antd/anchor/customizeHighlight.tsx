import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

const getCurrentAnchor = () => '#components-anchor-demo-static';

storiesOf('antd/anchor', module).add('customizeHighlight', () => 
  <Anchor affix={false} getCurrentAnchor={getCurrentAnchor}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Customize the anchor highlight.</p></>) } });