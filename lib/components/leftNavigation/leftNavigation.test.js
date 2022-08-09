import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LeftNavigation from './leftNavigation';

const setup = () => {
  render(<LeftNavigation />);
  const menu = screen.getByRole('menu');
  return { menu };
};

test('LeftNavigation: render component', () => {
  const { menu } = setup();

  expect(menu).toBeInTheDocument();
});

test('LeftNavigation: should open on mouseover', () => {
  const { menu } = setup();
  fireEvent.mouseOver(menu);
  expect(menu).toHaveClass('ant-menu-inline');
});

test('LeftNavigation: should close on mouseleave', () => {
  const { menu } = setup();
  fireEvent.mouseOver(menu);
  fireEvent.mouseLeave(menu);
  expect(menu).toHaveClass('ant-menu-inline-collapsed');
});

test('LeftNavigation: should open on focus', () => {
  const { menu } = setup();
  menu.focus();
  expect(menu).toHaveClass('ant-menu-inline');
});

test('LeftNavigation: should close on blur', () => {
  const { menu } = setup();
  menu.focus();
  menu.blur();
  expect(menu).toHaveClass('ant-menu-inline-collapsed');
});

test('LeftNavigation: should not close on mouseLeave if focused', () => {
  const { menu } = setup();
  menu.focus();
  fireEvent.mouseOver(menu);
  fireEvent.mouseLeave(menu);
  expect(menu).toHaveClass('ant-menu-inline');
});
