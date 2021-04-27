import React from 'react';
import { render, act } from '@testing-library/react';
import UserDropdown from './UserDropdown';

describe('User Dropdown', () => {
  const cbLogoutStub = jest.fn();
  const cbDropdownStub = jest.fn();

  it('should render with open logout dropdown', async () => {
    const { getByText } = render(
      <UserDropdown
        isOpen
        userId="user"
        logoutText="Log out"
        handleLogout={cbLogoutStub}
        handleDropdownClick={cbDropdownStub}
      />,
    );

    const logoutEl = getByText('Log out');
    const userIdEl = getByText('user');

    expect(logoutEl.tagName).toEqual('SPAN');
    expect(userIdEl.tagName).toEqual('SPAN');
  });

  it('should render without logout dropdown', async () => {
    const { queryByText } = render(
      <UserDropdown
        isOpen={false}
        userId="testuser"
        logoutText="Log out"
        handleLogout={cbLogoutStub}
        handleDropdownClick={cbDropdownStub}
      />,
    );

    const logoutEl = queryByText('Log out');
    const userIdEl = queryByText('testuser');
    expect(logoutEl).toBeNull();
    expect(userIdEl.tagName).toEqual('SPAN');
  });

  it('should handle button click', async () => {
    const { getByTestId } = render(
      <UserDropdown
        isOpen
        userId="testuser"
        logoutText="Log out"
        handleLogout={cbLogoutStub}
        handleDropdownClick={cbDropdownStub}
      />,
    );

    const dropdownBtn = getByTestId('dropdown-btn');
    const logoutBtn = getByTestId('logout-btn');

    act(() => {
      dropdownBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
      logoutBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(cbDropdownStub.mock.calls.length).toBe(1);
    expect(cbLogoutStub.mock.calls.length).toBe(1);
  });
});
