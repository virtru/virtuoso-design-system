module.exports = {
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/config/test.config.js'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/lib/$1',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['./node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  cacheDirectory: '<rootDir>/node_modules/.cache/jest',
  collectCoverageFrom: ['lib/**/*.{js,jsx}', '!**/node_modules/**'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  coverageReporters: ['lcov', 'text-summary'],
};
