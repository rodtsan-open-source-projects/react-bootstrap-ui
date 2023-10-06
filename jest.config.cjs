module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|sass|scss)$": "identity-obj-proxy",
    '^@/src/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx']
};
