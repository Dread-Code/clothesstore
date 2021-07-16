const basic = require('./jest.config.base')

module.exports = {
  projects: [
    {
      displayName: 'core',
      roots: ['<rootDir>/core/src/'],
      ...basic
    },
    {
      displayName: 'packages/components',
      roots: ['<rootDir>/packages/cs-components/components/'],
      ...basic
    }
  ],
  ...basic
}
