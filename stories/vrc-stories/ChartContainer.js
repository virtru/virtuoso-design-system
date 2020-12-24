/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import { Button, ChartContainer } from '@';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

const ChartContainerContentSmall = () => (
  <div
    style={{
      color: '#2d323b',
      font: "normal 13px 'Open Sans', Helvetica, Arial, sans-serif",
      lineHeight: '18px',
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum sapien ut libero rutrum
    tristique.
  </div>
);

const ChartContainerContentLarge = () => (
  <div
    style={{
      background: '#F7E2FC',
      padding: '20px',
      maxWidth: '800px',
      height: '300px',
    }}
  />
);

storiesOf('ChartContainer', module)
  .lokiSkip('default', () => {
    const isOpened = boolean('ChartContainer is opened', true);
    const title = text('ChartContainer title', 'Warning this is a ChartContainer Title');

    return (
      <Container>
        {isOpened && (
          <ChartContainer title={title}>
            <ChartContainerContentSmall />
          </ChartContainer>
        )}
      </Container>
    );
  })
  
  .add('large - no footer buttons', () => (
    <Container>
      <ChartContainer title="This is an interactive chart container frame... put stuff below in the pink area">
        <ChartContainerContentLarge />
      </ChartContainer>
    </Container>
  ))
  