import React from 'react';
import { render, fireEvent, screen, createEvent } from '@testing-library/react';
import { createEditorStateWithText } from '@draft-js-plugins/editor';
import { Modal } from '@';
import RichText from './richText';

const getEditorData = jest.fn();
const getInstance = (Component, props) => {
  const instanceRef = { current: null };
  const InstanceWrapper = () => {
    return <Component {...props} ref={instanceRef} />;
  };
  const renderResult = render(<InstanceWrapper />);
  return { ...renderResult, instanceRef };
};

describe('RichText: ', () => {
  test('should render component with toolbar and placeholder', async () => {
    const component = render(
      <RichText getEditorData={getEditorData} placeholder="placeholder text" />,
    );

    expect(component.getByTestId('richText')).toBeInTheDocument();
    expect(component.getByText('placeholder text')).toBeInTheDocument();
    expect(component.getByTestId('richText').firstChild).toHaveClass('DraftEditor-root');
    expect(component.getByTestId('richText').lastChild).toHaveClass('toolbar');
    expect(component.getAllByRole('button')).toHaveLength(6);
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

  test('should show warning once if content size is over 50 bytes', () => {
    Modal.warning = jest.fn();

    const { instanceRef } = getInstance(RichText, {
      getEditorData: () => {},
      placeholder: '',
      maxContentSize: {
        bytes: 50,
        warning: 'Msg is over 50 bytes',
      },
    });

    const newContent = '1234567890_1234567890_1234567890_1234567890_1234567890';

    instanceRef.current.onChange(createEditorStateWithText(newContent));
    instanceRef.current.onChange(createEditorStateWithText(newContent + newContent));

    expect(Modal.warning).toHaveBeenCalledTimes(1);
  });
});
