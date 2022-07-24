module.exports = {
  root: true,
  extends: ["plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking", "next/core-web-vitals", "prettier", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: "tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  overrides: [{
    files: ["jest.setup.ts", "jest.config.ts", "*.test.*", "**/__mocks__/*", "**/__tests__/*"],
    plugins: ["jest", "testing-library"],
    extends: ["plugin:jest/recommended", "plugin:jest/style", "plugin:testing-library/react"],
    env: {
      "jest/globals": true
    }
  }, {
    files: ["*.stories.*"],
    plugins: ["storybook"],
    extends: ["plugin:storybook/recommended"]
  }]
};