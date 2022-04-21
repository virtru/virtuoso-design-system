module.exports = {
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/config/test.config.js'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', '.less'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/lib/__mocks__/fileMock.js',
    '\\.css$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/lib/$1',
    '\\.less$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    './node_modules/',
    '/node_modules/(?!antd|@ant-design||rc-.+?|@babel/runtime).+(js|jsx|less)$',
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|less)$',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  cacheDirectory: '<rootDir>/node_modules/.cache/jest',
  collectCoverageFrom: ['lib/**/*.{js,jsx}', '!**/node_modules/**'],
  coverageThreshold: {
    // TODO improve test coverage so we can set global thresholds
    // global: {
    //   branches: 80,
    //   functions: 80,
    //   lines: 80,
    //   statements: -10,
    // },
  },
  coverageReporters: ['lcov', 'text-summary'],
};
