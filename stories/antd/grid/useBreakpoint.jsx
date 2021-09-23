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

storiesOf('Components/Ant Design/Grid', module).add('useBreakpoint', () => <UseBreakpointDemo />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/grid/" target="_blank">
                  documentation on Grid component
                </a>.
              </>
            ) }
        });