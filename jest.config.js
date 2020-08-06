module.exports = {
  roots: ["<rootDir>/src"],
  setupFiles: [
    "<rootDir>/.jest/setEnvVars.js",
    "<rootDir>/.jest/registerContext.js",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "\\.tsx?$": "<rootDir>/.jest/transform",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
