import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';

import { FileListItem, Button } from '@';

import 'antd/dist/antd.less';

storiesOf('virtru/fileListItem', module).add(
  'progress',
  () => {
    const [progress, setProgress] = useState(30);

    const inputSlideChangeHandler = useCallback((e) => {
      setProgress(+e.target.value);
    }, []);

    return (
      <div style={{ width: 250 }}>
        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          style={{ width: '100%' }}
          onChange={inputSlideChangeHandler}
        />

        <FileListItem
          progress={progress}
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
