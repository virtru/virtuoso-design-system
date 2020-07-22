/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useLayoutEffect } from 'react';
import { storiesOf } from '@storybook/react';

import { boolean, select } from '@storybook/addon-knobs';
import { Checkbox } from '@';

const variants = Object.values(Checkbox.VARIANT);
const [defaultVariant] = variants;
// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1' }}>{children}</div>
);
// eslint-disable-next-line react/prop-types
const CheckboxTable = ({ variant }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    ref.current.focus();
  }, [ref]);

  return (
    <table>
      <tbody>
        <tr>
          <th>Enabled</th>
          <td>
            <Checkbox variant={variant} />
          </td>
        </tr>
        <tr>
          <th>Disabled</th>
          <td>
            <Checkbox variant={variant} disabled />
          </td>
        </tr>
        <tr>
          <th>Hover/Focus</th>
          <td>
            <Checkbox variant={variant} ref={ref} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

storiesOf('Checkbox', module)
  .lokiSkip('default', () => (
    <Container>
      <Checkbox
        disabled={boolean('Disabled', false)}
        variant={select('Variant', variants, defaultVariant)}
        onChange={() => {}}
      />
    </Container>
  ))
  .add('unchecked', () => <CheckboxTable variant={Checkbox.VARIANT.UNCHECKED} />)
  .add('checked', () => <CheckboxTable variant={Checkbox.VARIANT.CHECKED} />)
  .add('indeterminate', () => <CheckboxTable variant={Checkbox.VARIANT.INDETERMINATE} />)
  .add('preset', () => <CheckboxTable variant={Checkbox.VARIANT.PRESET} />);
