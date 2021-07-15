module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(spec).+(ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
