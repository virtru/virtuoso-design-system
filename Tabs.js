/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs';

import { Tab, Tabs, TabList, TabPanel } from '../lib';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: 1 }}>{children}</div>
);

const printTabs = (count, size) => (
  <Tabs size={size}>
    <TabList>
      {Array.from({ length: count }).map((_, index) => (
        <Tab>Label {index + 1}</Tab>
      ))}
    </TabList>
    {Array.from({ length: count }).map((_, index) => (
      <TabPanel>
        <div style={{ padding: '20px' }}>Content for tab {index + 1}</div>
      </TabPanel>
    ))}
  </Tabs>
);

const sizes = Object.values(Tabs.SIZE);
const defaultSize = Tabs.SIZE.SMALL;

storiesOf('Tabs', module)
  .lokiSkip('default', () => {
    const tabsCount = number('Number of tabs', 2);
    const size = select('Size', sizes, defaultSize);

    return <Container>{printTabs(tabsCount, size)}</Container>;
  })
  .add('one tab small', () => <Container>{printTabs(1, Tabs.SIZE.SMALL)}</Container>)
  .add('multiple tabs small', () => <Container>{printTabs(3, Tabs.SIZE.SMALL)}</Container>)
  .add('one tab large', () => <Container>{printTabs(1, Tabs.SIZE.LARGE)}</Container>)
  .add('multiple tabs large', () => <Container>{printTabs(3, Tabs.SIZE.LARGE)}</Container>);
