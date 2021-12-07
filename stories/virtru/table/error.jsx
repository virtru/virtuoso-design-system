import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TableError } from '@';

storiesOf('virtru/table_error', module).add(
  'error',
  () => <TableError onClick={() => alert('error')} />,
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>Simple table with actions.</p>
        </>
      ),
    },
  },
).add(
    'no data',
    () => <TableError onClick={() => alert('no data')} variant={TableError.VARIANT.NO_DATA} />,
    {
      docs: {
        page: () => (
          <>
            <h1 id="enus">en-US</h1>
            <p>Simple table with actions.</p>
          </>
        ),
      },
    },
  );
