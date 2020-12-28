/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';

import ChartContainer from '@/components/ChartContainer/ChartContainer';

storiesOf('ChartContainer', module)
  .lokiSkip('default', () => (
    <div style={{ width: '1000px' }}>
      <ChartContainer
        title="How much data is being protected?"
        subtitle="Policies created by type"
        showSelect
        onBackClick={() => {}}
        onSettingsClick={() => {}}
        value="Select another domain"
        options={object('Options', [
          { value: 'domain1', label: 'domain1.com' },
          { value: 'domain2', label: 'domain2.com' },
          { value: 'domain3', label: 'domain3.com' },
        ])}
        placeholder={text('Placeholder', 'Select another domain')}
      >
        {text('Inner content', 'I am inner html')}
        {text('Inner content', 'I am inner html')}
      </ChartContainer>
    </div>
  ))
  .add('no select', () => (
    <div style={{ width: '1000px' }}>
      <ChartContainer
        title="How much data is being protected?"
        subtitle="Policies created by type"
        onBackClick={() => {}}
        onSettingsClick={() => {}}
        value="Select another domain"
        options={object('Options', [
          { value: 'domain1', label: 'domain1.com' },
          { value: 'domain2', label: 'domain2.com' },
          { value: 'domain3', label: 'domain3.com' },
        ])}
        placeholder={text('Placeholder', 'Select another domain')}
      >
        {text('Inner content', 'I am inner html')}
        {text('Inner content', 'I am inner html')}
      </ChartContainer>
    </div>
  ))
  .add('no buttons', () => (
    <div style={{ width: '1000px' }}>
      <ChartContainer
        title="How much data is being protected?"
        subtitle="Policies created by type"
        showSelect
        value="Select another domain"
        options={object('Options', [
          { value: 'domain1', label: 'domain1.com' },
          { value: 'domain2', label: 'domain2.com' },
          { value: 'domain3', label: 'domain3.com' },
        ])}
        placeholder={text('Placeholder', 'Select another domain')}
      >
        {text('Inner content', 'I am inner html')}
        {text('Inner content', 'I am inner html')}
      </ChartContainer>
    </div>
  ))
  .add('minimal', () => (
    <div style={{ width: '1000px' }}>
      <ChartContainer
        title="How much data is being protected?"
        subtitle="Policies created by type"
        value="Select another domain"
        options={object('Options', [
          { value: 'domain1', label: 'domain1.com' },
          { value: 'domain2', label: 'domain2.com' },
          { value: 'domain3', label: 'domain3.com' },
        ])}
        placeholder={text('Placeholder', 'Select another domain')}
      >
        {text('Inner content', 'I am inner html')}
        {text('Inner content', 'I am inner html')}
      </ChartContainer>
    </div>
  ));
