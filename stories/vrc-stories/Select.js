/* eslint-disable import/no-extraneous-dependencies */
import React, { useLayoutEffect, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs';

import { Select } from '@';

const generateOptions = count =>
  Array.from({ length: count }).map((_, index) => ({
    label: `Option ${index + 1}`,
    value: index,
  }));

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: 1 }}>{children}</div>
);

storiesOf('Select', module)
  .lokiSkip('default', () => {
    const optionsCount = number('Number of options', 5);
    const optionPrefix = text('Option prefix', 'Menu Option');
    const isShowIndex = boolean('Show option index', true);

    return (
      <Container>
        <Select
          placeholder={text('Placeholder', 'Select an Option')}
          options={Array.from({ length: optionsCount }).map((_, index) => ({
            label: `${optionPrefix} ${isShowIndex ? index + 1 : ''}`.trim(),
            value: index,
          }))}
          isDisabled={boolean('Is disabled', false)}
          isSearchable={boolean('Is searchable', false)}
          isMulti={boolean('Is multi select', false)}
        />
      </Container>
    );
  })
  .add('hover/focus', () => (
    <Container>
      <Select autoFocus placeholder="Select an Option" />
    </Container>
  ))
  .add('open with focused option', () => {
    const selectRef = useRef(null);

    useLayoutEffect(() => {
      selectRef.current.select.openMenu('first');
    }, [selectRef]);

    return (
      <Container>
        <Select ref={selectRef} placeholder="Select an Option" options={generateOptions(3)} />
      </Container>
    );
  })
  .add('with massage', () => {
    const options = generateOptions(3);
    const [selectedOption] = options;
    const message = text('Info massage', 'Hello world');

    return (
      <Container>
        <Select message={message} placeholder="Select an Option" options={options} value={selectedOption} />
      </Container>
    );
  })
  .add('first option selected', () => {
    const options = generateOptions(3);
    const [selectedOption] = options;

    return (
      <Container>
        <Select placeholder="Select an Option" options={options} value={selectedOption} />
      </Container>
    );
  })
  .add('disabled', () => (
    <Container>
      <Select autoFocus placeholder="Select an Option" isDisabled />
    </Container>
  ))
  .add('searchable', () => (
    <Container>
      <Select autoFocus placeholder="Select an Option" isSearchable />
    </Container>
  ))
  .add('menu items above another select', () => {
    const selectRef = useRef(null);

    useLayoutEffect(() => {
      selectRef.current.select.openMenu('first');
    }, [selectRef]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, maxWidth: 400 }}>
        <Select ref={selectRef} placeholder="Select an Option" options={generateOptions(3)} />
        <Select placeholder="Select an Option" options={generateOptions(3)} />
      </div>
    );
  })
  .add('multi options selected and menu is open', () => {
    const options = generateOptions(8);
    const selectedOptions = options.slice(0, 6);

    return (
      <Container>
        <Select
          autoFocus
          placeholder="Select an Option"
          isMulti
          options={options}
          value={selectedOptions}
          menuIsOpen
        />
      </Container>
    );
  })
  .add('multi options with search text', () => {
    const options = generateOptions(5);
    const selectedOptions = options.slice(0, 2);

    return (
      <Container>
        <Select
          autoFocus
          placeholder="Select an Option"
          isMulti
          options={options}
          value={selectedOptions}
          menuIsOpen
          isSearchable
          inputValue="Option 3"
        />
      </Container>
    );
  });
