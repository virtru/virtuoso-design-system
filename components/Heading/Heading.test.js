import React from 'react';
import { render } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  it('should render', async () => {
    const headingText = 'Heading text';
    const { getByText } = render(
      <Heading size={Heading.SIZE.XLARGE} rank={1}>
        {headingText}
      </Heading>,
    );

    const headingElem = getByText(headingText);

    expect(headingElem.tagName).toEqual('H1');
  });

  it('should render with a different rank', async () => {
    const headingText = 'Heading text';
    const { getByText } = render(
      <Heading size={Heading.SIZE.XLARGE} rank={4}>
        {headingText}
      </Heading>,
    );

    const headingElem = getByText(headingText);

    expect(headingElem.tagName).toEqual('H4');
  });
});
