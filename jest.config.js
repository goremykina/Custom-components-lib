/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["ts-jest", { useESM: true }]
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  // setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
  collectCoverageFrom: ['**/*.{ts,tsx}','!**/node_modules/**'],
};