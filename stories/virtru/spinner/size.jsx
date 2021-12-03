import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spinner } from '@';

storiesOf('virtru/spinner', module).add(
  'size',
  () => (
    <>
      <Spinner size="5rem" />
      <Spinner size="10rem" />
      <Spinner size="15rem" />
    </>
  ),
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>Custom Virtru spinner with setting size.</p>
        </>
      ),
    },
  },
);
