import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderMenus from './HeaderMenus';
import Header from './Header';

jest.mock('./HeaderMenus', () => {
  const menu = () => <div>header menus</div>;

  return {
    __esModule: true,
    default: menu,
    MENU_ALIGNMENTS_LIST: [''],
    MENU_ALIGNMENTS_DEFAULT: '',
    MENU_ALIGNMENTS: {},
  };
});

describe('Header', () => {
  describe('with logo renderer', () => {
    let rendererWrapper;
    const logoRenderer = (content) => (
      <a href="/home" data-testid="logo-wrapper">
        {content}
      </a>
    );

    beforeEach(async () => {
      render(
        <Header company="Virtue" logoRenderer={logoRenderer} title="My App">
          <HeaderMenus />
        </Header>,
      );

      rendererWrapper = screen.getByTestId('logo-wrapper');
    });

    it('should render logo with wrapper', () => {
      expect(rendererWrapper).toBeInTheDocument();
      expect(rendererWrapper.href).toBe(`${window.location}home`);
    });
  });
});
