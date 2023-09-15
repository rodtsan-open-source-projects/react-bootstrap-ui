module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|sass|scss)$": "identity-obj-proxy",
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx']
};
