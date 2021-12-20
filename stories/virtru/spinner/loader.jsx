import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Loader } from '@';

storiesOf('virtru/spinner', module).add('loader', () => <Loader />, {
  docs: {
    page: () => (
      <>
        <h1 id="enus">en-US</h1>
        <p>Custom Virtru loader for page.</p>
      </>
    ),
  },
});
