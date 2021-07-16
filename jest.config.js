const basic = require('./jest.config.base')

module.exports = {
  projects: [
    {
      displayName: 'core',
      roots: ['<rootDir>/core/src/'],
      ...basic
    },
    {
      displayName: '@usp/components',
      roots: ['<rootDir>/packages/cs-components/stories/'],
      ...basic
    }
  ],
  ...basic
}
