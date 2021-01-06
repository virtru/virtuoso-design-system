/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import ChartContainer from '@/components/ChartContainer/ChartContainer';
import Select from '@/components/Select/Select';

const children = (
  <div
    style={{
      background: '#F7E2FC',
      width: '930px',
      height: '300px',
      border: '1px solid #515864',
      borderRadius: '5px',
    }}
  />
);
const props = {
  title: 'How much data is being protected?',
  subtitle: (
    <div style={{ fontSize: '1.6rem', fontFamily: 'Open Sans' }}> Policies created by type </div>
  ),
};

const select = (
  <div style={{ width: '240px' }}>
    <Select
      value="Select another domain"
      options={[
        { value: 'domain1', label: 'domain1.com' },
        { value: 'domain2', label: 'domain2.com' },
        { value: 'domain3', label: 'domain3.com' },
      ]}
      placeholder="Select another domain"
    />
  </div>
);

storiesOf('ChartContainer', module)
  .lokiSkip('default', () => (
    <ChartContainer
      onBackClick={() => {
        alert('back');
      }}
      onSettingsClick={() => {
        alert('settings');
      }}
      select={select}
      {...props}
    >
      {children}
    </ChartContainer>
  ))
  .add('no select', () => (
    <ChartContainer
      onBackClick={() => {
        alert('back');
      }}
      onSettingsClick={() => {
        alert('settings');
      }}
      {...props}
    >
      {children}
    </ChartContainer>
  ))
  .add('no back', () => (
    <ChartContainer
      onSettingsClick={() => {
        alert('settings');
      }}
      {...props}
    >
      {children}
    </ChartContainer>
  ))
  .add('minimal', () => <ChartContainer {...props}>{children}</ChartContainer>);
