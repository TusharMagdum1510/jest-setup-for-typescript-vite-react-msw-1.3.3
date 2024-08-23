export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.app.json",
      },
    ],
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  preset: "ts-jest",
  transformIgnorePatterns: [
    "/node_modules/(?!msw|other-esm-package).+\\.js$",
  ],
  testEnvironmentOptions: {
    customExportConditions: [""]
  },
};

