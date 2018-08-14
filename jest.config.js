module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',
  /* transform: {
    '^.+\\.tsx?$': 'ts-jest',
  }, */
  /*testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',*/
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
