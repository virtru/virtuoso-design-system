import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select, Tag } from 'antd';

const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

storiesOf('select', module).add('custom-tag-render', () => 
  <Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    defaultValue={['gold', 'cyan']}
    style={{ width: '100%' }}
    options={options}
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Allows for custom rendering of tags.</p></>) } });