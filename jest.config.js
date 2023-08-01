module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@Api(.*)$': '<rootDir>/src/api$1',
    '@Pages(.*)$': '<rootDir>/src/pages$1',
    '@Redux(.*)$': '<rootDir>/src/redux$1',
    '@Components(.*)$': '<rootDir>/src/components$1'
  }
};
