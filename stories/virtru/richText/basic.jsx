import React, { useCallback, useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { GroupEditor, RichText } from '@';

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
    const knobsValue = text('Value', 'Some text');

    const [value, setValue] = useState(knobsValue);

    const richTextChangeHandler = useCallback((newValue) => {
      setValue(newValue);
    }, []);

    useEffect(() => {
      setValue(knobsValue);
    }, [knobsValue]);

    return (
      <GroupEditor>
        <RichText value={value} onChange={richTextChangeHandler} />
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
