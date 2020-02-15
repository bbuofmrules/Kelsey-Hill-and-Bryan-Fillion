module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint" // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // 'plugin:prettier/recommended',    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  rules: {
    // note the rules part of eslint reccommeneded are standard rules across the typescript rulebase community. Reccommend not changing them unless necessary.
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/explicit-function-return-type": ["error", "generic"],
    "@typescript-eslint/array-type": ["error", "generic"],
    "@typescript-eslint/no-unused-vars": ["error", "generic"],
    "@typescript-eslint/no-explicit-any": ["error", "generic"],
    "@typescript-eslint/no-inferrable-types": "off"
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
};