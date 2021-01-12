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
