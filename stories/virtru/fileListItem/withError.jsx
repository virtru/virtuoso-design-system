import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { FileListItem, Button } from '@';

storiesOf('virtru/fileListItem', module).add(
  'withError',
  () => (
    <div style={{ width: 250 }}>
      <FileListItem
        warning
        name="file-with-error"
        extension=".tdf"
        decryptedExt="pdf"
        size="123.45 KB"
        tabIndex="0"
        button={
          <Button type="primary" size="small">
            Remove
          </Button>
        }
      />
    </div>
  ),
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
