const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

const esModules = ['@angular', '@ngrx', 'd3', '@ngx-translate']
module.exports = {
  preset: 'jest-preset-angular',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, { prefix: '<rootDir>/' }),
  setupFilesAfterEnv: ['<rootDir>/src/setup.jest.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom:["src/app/**/*.ts"],
  coveragePathIgnorePatterns:[
    ".config.ts",
    ".routes.ts",
    ".enum.ts",
    ".module.ts",
    "windowRef.ts",
    "menu-navigation.ts",
  ],
  coverageThreshold: {
    global: {
      statement: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },

  transformIgnorePatterns: [`<rootDir>/node_modules/(?!.*\\.mjs$|${esModules.join('|')})`],
};