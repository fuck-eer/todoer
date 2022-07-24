import { InitialOptionsTsJest } from "ts-jest/dist/types";

const config: InitialOptionsTsJest = {
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
    },
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/build"],
  watchPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/build"],
  collectCoverageFrom: ["./**/*.ts", "./**/*.tsx"],
  coveragePathIgnorePatterns: ["__generated__"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
