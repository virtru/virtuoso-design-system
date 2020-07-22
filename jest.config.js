module.exports = {
  preset: 'jest-config-virtru',
  setupFilesAfterEnv: ['<rootDir>/config/test.config.js'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};