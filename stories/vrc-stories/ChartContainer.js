/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import styles from 'lib/styles/build/js/design_tokens';
import ChartContainer from '@/components/ChartContainer/ChartContainer';
import Select from '@/components/Select/Select';

const children = (
  <div
    style={{
      background: styles.vds.color.red.lightest.value,
      width: '930px',
      height: '300px',
      border: `1px solid ${styles.vds.color.slate.darker.value}`,
      borderRadius: '5px',
    }}
  />
);
const props = {
  title: 'Where is my protected data going?',
  subtitle: (
    <>
      <span> 30,212 recipients at </span>
      <span style={{ fontWeight: styles.vds.font.weight.bold.value }}> company-one.com </span>
    </>
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
        { value: 'domain4', label: 'domain4.com' },
        { value: 'domain5', label: 'domain5.com' },
        { value: 'domain6', label: 'domain6-thisoneisreallylongand-goesonforever.com' },
        { value: 'domain7', label: 'domain7.com' },
        { value: 'domain8', label: 'domain8.com' },
        { value: 'domain9', label: 'domain9.com' },
        { value: 'domain10', label: 'domain10.com' },
        { value: 'domain11', label: 'domain11.com' },
        { value: 'domain12', label: 'domain12.com' },
      ]}
      placeholder="Select another domain"
      isSearchable
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
