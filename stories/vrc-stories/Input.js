/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useLayoutEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import { Input } from '@';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

const states = [null].concat(Object.values(Input.STATE));
const [defaultState] = states;

storiesOf('Input', module)
  .lokiSkip('default', () => (
    <Container>
      <Input
        state={select('State', states, defaultState)}
        message={text('Info message', '')}
        value={text('Input value', 'Type here')}
        disabled={boolean('Is disabled', false)}
      />
    </Container>
  ))
  .add('empty', () => (
    <Container>
      <Input />
    </Container>
  ))
  .add('focus empty', () => {
    const ref = useRef(null);

    useLayoutEffect(() => {
      ref.current.focus();
    }, [ref]);

    return (
      <Container>
        <Input ref={ref} />
      </Container>
    );
  })
  .add('focus', () => {
    const ref = useRef(null);

    useLayoutEffect(() => {
      ref.current.focus();
    }, [ref]);

    return (
      <Container>
        <Input ref={ref} value="Value" />
      </Container>
    );
  })
  .add('error', () => (
    <Container>
      <Input state={Input.STATE.ERROR} />
    </Container>
  ))
  .add('error focus', () => {
    const ref = useRef(null);

    useLayoutEffect(() => {
      ref.current.focus();
    }, [ref]);

    return (
      <Container>
        <Input ref={ref} value="Value" state={Input.STATE.ERROR} />
      </Container>
    );
  })
  .add('error with message', () => (
    <Container>
      <Input message="And this is an explanation" state={Input.STATE.ERROR} />
    </Container>
  ))
  .add('info with message', () => (
    <Container>
      <Input message="Helpful hint text…" state={Input.STATE.INFO} />
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      <Input value="Value" disabled />
    </Container>
  ));
