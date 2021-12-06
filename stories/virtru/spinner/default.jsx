import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spinner } from '@';

storiesOf('virtru/spinner', module).add('default', () => <Spinner />, {
  docs: {
    page: () => (
      <>
        <h1 id="enus">en-US</h1>
        <p>Custom Virtru spinner.</p>
      </>
    ),
  },
});
