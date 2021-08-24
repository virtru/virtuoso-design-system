import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popconfirm, message, Button } from 'antd';

const text = 'Are you sure to delete this task?';

function confirm() {
  message.info('Clicked on Yes.');
}

storiesOf('antd/popconfirm', module).add('placement', () => 
  <div className="demo">
    <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
      <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm
        placement="topRight"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>TR</Button>
      </Popconfirm>
    </div>
    <div style={{ width: 70, float: 'left' }}>
      <Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>LT</Button>
      </Popconfirm>
      <Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm
        placement="leftBottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>LB</Button>
      </Popconfirm>
    </div>
    <div style={{ width: 70, marginLeft: 304 }}>
      <Popconfirm
        placement="rightTop"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>RT</Button>
      </Popconfirm>
      <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>Right</Button>
      </Popconfirm>
      <Popconfirm
        placement="rightBottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>RB</Button>
      </Popconfirm>
    </div>
    <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
      <Popconfirm
        placement="bottomLeft"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>BL</Button>
      </Popconfirm>
      <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottomRight"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>BR</Button>
      </Popconfirm>
    </div>
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>There are 12 <code>placement</code> options available. Use <code>arrowPointAtCenter</code> if you want the arrow to point at the center of target.</p></>) } });