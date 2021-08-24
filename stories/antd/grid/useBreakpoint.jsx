import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Grid, Tag } from 'antd';

const { useBreakpoint } = Grid;

function UseBreakpointDemo() {
  const screens = useBreakpoint();
  return (
    <>
      Current break point:{' '}
      {Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => (
          <Tag color="blue" key={screen[0]}>
            {screen[0]}
          </Tag>
        ))}
    </>
  );
}

storiesOf('antd/grid', module).add('useBreakpoint', () => <UseBreakpointDemo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Use <code>useBreakpoint</code> Hook provide personalized layout.</p></>) } });