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
    '@Components(.*)$': '<rootDir>/src/components$1',
    '@Utils(.*)$': '<rootDir>/src/utils$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js'
  }
};
