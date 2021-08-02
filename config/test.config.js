/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

global.afterEach(() => {
  jest.restoreAllMocks();
});

jest.mock('../lib/helpers/useMatchMedia', () => ({
  __esModule: true,
  default: () => false,
}));
