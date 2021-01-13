import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';

const defaultProps = {
  options: [
    { value: 'option1', label: 'Menu Option 1' },
    { value: 'option2', label: 'Menu Option 2' },
    { value: 'option3', label: 'Menu Option 3' },
    { value: 'option4', label: 'Menu Option 4' },
    { value: 'option5', label: 'Menu Option 5' },
  ],
  placeholder: 'Select another option',
};

const renderComponent = (props = {}) => render(<Select {...defaultProps} {...props} />);

describe('Select', () => {
  it('should render Select component with correct placeholder', async () => {
    const wrapper = renderComponent();
    const placeholder = await wrapper.findByText('Select another option');

    expect(placeholder).toBeInTheDocument();
  });

  it('should render all 5 options', async () => {
    const wrapper = renderComponent();
    const placeholder = await wrapper.findByText('Select another option');

    userEvent.click(placeholder);

    const options = wrapper.container.querySelectorAll('.select__option');

    expect(options).toHaveLength(5);
  });

  it('should pick correct option if `value` is set', async () => {
    const wrapper = renderComponent({ value: { value: 'option2', label: 'Menu Option 2' } });
    const value = await wrapper.findByText('Menu Option 2');

    expect(value).toBeInTheDocument();
  });

  it('should select correct option if it is clicked', async () => {
    const wrapper = renderComponent();
    const placeholder = await wrapper.findByText('Select another option');

    userEvent.click(placeholder);

    const option = await wrapper.findByText('Menu Option 3');
    userEvent.click(option);
    const selectedValue = wrapper.container.querySelector('.select__single-value');

    expect(selectedValue).toHaveTextContent('Menu Option 3');
  });
});
