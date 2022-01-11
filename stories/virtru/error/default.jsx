import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Error } from '@';

storiesOf('virtru/error', module).add('default', () => <Error />, {
  docs: {
    page: () => (
      <>
        <h1 id="enus">en-US</h1>
        <p>Custom Virtru error screen.</p>
      </>
    ),
  },
});
