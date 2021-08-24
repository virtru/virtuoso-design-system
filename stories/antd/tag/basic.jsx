import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tag } from 'antd';

function log(e) {
  console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
}

storiesOf('tag', module).add('basic', () => 
  <>
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
    </Tag>
    <Tag closable onClose={log}>
      Tag 2
    </Tag>
    <Tag closable onClose={preventDefault}>
      Prevent Default
    </Tag>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Usage of basic Tag, and it could be closable by set <code>closable</code> property. Closable Tag supports <code>onClose</code> events.</p></>) } });