import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { GroupEditor, RichText } from '@';

import { createEditorState } from '@/utils/richText';

storiesOf('virtru/richText', module)
  .addDecorator(withKnobs)
  .addDecorator((Story) => (
    <div style={{ width: '100%' }}>
      <Story />
    </div>
  ))
  .add('basic', () => {
    const getEditorData = (value) => {
      // eslint-disable-next-line no-console
      console.log(value);
    };

    return (
      <GroupEditor>
        <RichText getEditorData={getEditorData} />
      </GroupEditor>
    );
  })
  .add('controlled', () => {
    const [editorState, setEditorState] = useState(createEditorState());

    return (
      <GroupEditor>
        <RichText editorState={editorState} onChange={setEditorState} />
      </GroupEditor>
    );
  })
  .add('max content size', () => {
    const bytes = number('Bytes', 10);
    const warning = text('Message', 'Warning message');

    return (
      <GroupEditor>
        <RichText maxContentSize={{ bytes, warning }} />
      </GroupEditor>
    );
  });
