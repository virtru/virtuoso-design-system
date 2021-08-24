import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

storiesOf('collapse', module).add('custom', () => 
  <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
    className="site-collapse-custom-collapse"
  >
    <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
      <p>{text}</p>
    </Panel>
  </Collapse>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Customize the background, border, margin styles and icon for each panel.</p></>) } });