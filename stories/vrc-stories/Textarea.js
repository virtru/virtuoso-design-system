/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, number } from '@storybook/addon-knobs';
import { Textarea } from '../lib';

const sampleText = `This is a sample
to cover this plain white field.
No lorem ipsum.`;

const hintText = 'Consider the above carefully';
const errorText = 'You did not consider the above';
const labelText = 'Input';

// eslint-disable-next-line react/prop-types
const ManagedTextarea = ({ height, width, ...props }) => {
  const [value, setValue] = useState('');
  const onChange = ({ target: { value: newVal } }) => setValue(newVal);

  return (
    <div style={{ height, width }}>
      <Textarea value={value} onChange={onChange} {...props} />
    </div>
  );
};

// Storybook uses flex, which makes it "ignore" the 100% width on textarea. If you inspect and disable it, it strectches properly
storiesOf('Textarea', module)
  .lokiSkip('default', () => {
    const label = text('Label', 'Label');
    const message = text('Hint/Error Message');
    const error = boolean('Error', false);
    const disabled = boolean('Disabled', false);
    const rows = number('Rows', 3);
    const height = number('Height', 300);
    const width = number('Width', 500);

    return (
      <ManagedTextarea
        height={`${height}px`}
        width={`${width}px`}
        rows={rows}
        label={label}
        message={message}
        error={error}
        disabled={disabled}
      />
    );
  })
  .add('normal, blank, no label', () => <Textarea />)
  .add('normal, text, no label', () => <Textarea value={sampleText} />)
  .add('normal, blank, label', () => <Textarea label={labelText} />)
  .add('normal, text, label', () => <Textarea label={labelText} value={sampleText} />)
  .add('hint, blank, no label', () => <Textarea message={hintText} />)
  .add('hint, text, no label', () => <Textarea message={hintText} value={sampleText} />)
  .add('hint, blank, label', () => <Textarea message={hintText} label={labelText} />)
  .add('hint, text, label', () => (
    <Textarea message={hintText} label={labelText} value={sampleText} />
  ))
  .add('error, blank, no label', () => <Textarea message={errorText} error />)
  .add('error, text, no label', () => <Textarea message={errorText} value={sampleText} error />)
  .add('error, blank, label', () => <Textarea message={errorText} label={labelText} error />)
  .add('error, text, label', () => (
    <Textarea message={errorText} label={labelText} value={sampleText} error />
  ))
  .add('disabled, blank, no label', () => <Textarea disabled />)
  .add('disabled, text, no label', () => <Textarea disabled value={sampleText} />)
  .add('disabled, blank, label', () => <Textarea label={labelText} disabled />)
  .add('disabled, text, label', () => <Textarea label={labelText} value={sampleText} disabled />)
  .add('disabled + hint, blank, no label', () => <Textarea message={hintText} disabled />)
  .add('disabled + hint, text, no label', () => (
    <Textarea message={hintText} disabled value={sampleText} />
  ))
  .add('disabled + hint, blank, label', () => (
    <Textarea message={hintText} label={labelText} disabled />
  ))
  .add('disabled + hint, text, label', () => (
    <Textarea message={hintText} label={labelText} value={sampleText} disabled />
  ));
