import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spinner } from '@';

storiesOf('virtru/spinner', module).add(
  'title',
  () => (
    <>
      <Spinner title={{ value: 'Loading', size: '2.5rem' }} size="10rem" />
      <Spinner title={{ value: 'Loading', size: '5rem' }} size="15rem" />
    </>
  ),
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>Custom Virtru spinner with setting size and title.</p>
        </>
      ),
    },
  },
);
