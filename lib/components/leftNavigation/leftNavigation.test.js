import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import LeftNavigation from './leftNavigation';

describe('LeftNavigation', () => {
  const items = [
    {
      key: 'outbound',
      label: <a href="#send">Send</a>,
    },
    {
      key: 'inbound',
      label: <a href="#request">Request</a>,
    },
  ];

  const setup = () => {
    render(<LeftNavigation items={items} />);

    return { menu: screen.getByRole('menu') };
  };

  test('render component', () => {
    const { menu } = setup();

    expect(menu).toBeInTheDocument();
  });

  test('should open on mouseover and close on mouseleave', () => {
    const { menu } = setup();

    fireEvent.mouseOver(menu);

    expect(menu).not.toHaveClass('ant-menu-inline-collapsed');

    fireEvent.mouseLeave(menu);

    expect(menu).toHaveClass('ant-menu-inline-collapsed');
  });

  test('should open on menu item focus', async () => {
    const { menu } = setup();

    await act(async () => {
      screen.getAllByRole('menuitem')[0].focus();
    });

    expect(menu).not.toHaveClass('ant-menu-inline-collapsed');
  });

  test('should open on focus and close on blur', async () => {
    const { menu } = setup();

    await act(async () => {
      menu.focus();
    });

    expect(menu).not.toHaveClass('ant-menu-inline-collapsed');

    await act(async () => {
      menu.blur();
    });

    expect(menu).toHaveClass('ant-menu-inline-collapsed');
  });

  test('should not close on mouseLeave if focused', () => {
    const { menu } = setup();

    menu.focus();

    fireEvent.mouseOver(menu);

    fireEvent.mouseLeave(menu);

    expect(menu).not.toHaveClass('ant-menu-inline-collapsed');
  });
});
