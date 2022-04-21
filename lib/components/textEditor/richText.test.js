import React from 'react';
import { render, fireEvent, screen, createEvent } from '@testing-library/react';
import RichText from './richText';

const getEditorData = jest.fn();

describe('RichText: ', () => {
  test('should render component with toolbar and placeholder', async () => {
    const component = render(
      <RichText getEditorData={getEditorData} placeholder="placeholder text" />,
    );

    expect(component.getByTestId('richText')).toBeInTheDocument();
    expect(component.getByText('placeholder text')).toBeInTheDocument();
    expect(component.getByTestId('richText').firstChild).toHaveClass('DraftEditor-root');
    expect(component.getByTestId('richText').lastChild).toHaveClass('toolbar');
    expect(component.getAllByRole('button')).toHaveLength(12);
  });

  test('should add text and hide placeholder', async () => {
    const component = render(
      <RichText getEditorData={getEditorData} placeholder="placeholder text" />,
    );

    expect(component.getByRole('textbox')).toBeInTheDocument();

    const textarea = screen.findByRole('textbox');
    const event = createEvent.paste(await textarea, {
      clipboardData: {
        types: ['text/plain'],
        getData: () => 'hello text',
      },
    });
    fireEvent(await textarea, event);

    expect(component.getByText('hello text')).toBeInTheDocument();
    expect(component.queryByText('placeholder text')).not.toBeInTheDocument();
  });
});
