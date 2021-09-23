import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { useState } from 'react';
import { Timeline, Radio } from 'antd';

function TimelimeLabelDemo() {
  const [mode, setMode] = useState('left');

  const onChange = e => {
    setMode(e.target.value);
  };

  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline mode={mode}>
        <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
        <Timeline.Item>Technical testing</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
      </Timeline>
    </>
  );
}

storiesOf('Components/Ant Design/Timeline', module).add('label', () => <TimelimeLabelDemo />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/timeline/" target="_blank">
                  documentation on Timeline component
                </a>.
              </>
            ) }
        });