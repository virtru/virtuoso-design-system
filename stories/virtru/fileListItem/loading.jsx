import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';

import { FileListItem, Button, Switch } from '@';

import 'antd/dist/antd.less';

storiesOf('virtru/fileListItem', module).add(
  'loading',
  () => {
    const [loading, setLoading] = useState(true);

    const checkboxChangeHandler = useCallback((checked) => {
      setLoading(checked);
    }, []);

    return (
      <div style={{ width: 250 }}>
        <Switch checked={loading} onChange={checkboxChangeHandler} /> Loading
        <FileListItem
          loading={loading}
          name="file-with-error"
          extension=".tdf"
          decryptedExt="pdf"
          size="123.45 KB"
          button={
            <Button type="primary" size="small">
              Remove
            </Button>
          }
        />
      </div>
    );
  },
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>
            There are <code>primary</code> button, <code>default</code> button, <code>dashed</code>{' '}
            button, <code>text</code> button and <code>link</code> button in antd.
          </p>
        </>
      ),
    },
  },
);
