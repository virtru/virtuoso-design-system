import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
);

storiesOf('Components/Ant Design/Collapse', module).add('borderless', () => 
  <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="This is panel header 1" key="1">
      {text}
    </Panel>
    <Panel header="This is panel header 2" key="2">
      {text}
    </Panel>
    <Panel header="This is panel header 3" key="3">
      {text}
    </Panel>
  </Collapse>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/collapse/" target="_blank">
                  documentation on Collapse component
                </a>.
              </>
            ) }
        });