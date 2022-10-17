import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import { FileListItem, Button } from '@';

export default {
  title: 'With progress',
  decorators: [withKnobs],
};

storiesOf('virtru/fileListItem', module).add(
  'progress',
  () => (
    <div style={{ width: 250 }}>
      <FileListItem
        loading={boolean('Loading', false)}
        progress={number('Progress', 30, { range: true, min: 0, max: 100 })}
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
  ),
  {
    docs: {
      page: null,
    },
  },
);
