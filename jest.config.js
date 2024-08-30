const esModules = ['@angular', '@ngrx', 'd3', '@ngx-translate']
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup.jest.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom:["src/app/**/*.ts"],
  coveragePathIgnorePatterns:[
    ".config.ts",
    ".routes.ts"
  ],
  coverageThreshold: {
    global: {
      statement: 90,
      branches: 90,
      functions: 90,
      lines: 90
    }
  },

  transformIgnorePatterns: [`<rootDir>/node_modules/(?!.*\\.mjs$|${esModules.join('|')})`],
};