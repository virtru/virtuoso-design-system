import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

const handleClick = (
  e: React.MouseEvent<HTMLElement>,
  link: {
    title: React.ReactNode;
    href: string;
  },
) => {
  e.preventDefault();
  console.log(link);
};

storiesOf('anchor', module).add('onClick', () => 
  <Anchor affix={false} onClick={handleClick}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Clicking on an anchor does not record history.</p></>) } });