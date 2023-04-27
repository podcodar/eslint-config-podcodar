module.exports = {
  extends: [
    "@podcodar/eslint-config-base",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "./rules/typescript"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: ["tsconfig.json"]
  }
};
