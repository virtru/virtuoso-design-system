/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

global.afterEach(() => {
  jest.restoreAllMocks();
});
