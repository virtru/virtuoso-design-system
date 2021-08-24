import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Collapse, Space } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

storiesOf('antd/collapse', module).add('collapsible', () => 
  <Space direction="vertical">
    <Collapse collapsible="header" defaultActiveKey={['1']}>
      <Panel header="This panel can only be collapsed by clicking text" key="1">
        <p>{text}</p>
      </Panel>
    </Collapse>
    <Collapse collapsible="disabled">
      <Panel header="This panel can't be collapsed" key="1">
        <p>{text}</p>
      </Panel>
    </Collapse>
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Specify the trigger area of collapsible by <code>collapsible</code>.</p></>) } });