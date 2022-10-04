module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, //
  },
  root: true,
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
    // 'plugin:prettier/recommneded', // deprecated
    "airbnb/hooks", //
    "plugin:@typescript-eslint/recommended", //
    "plugin:@typescript-eslint/recommended-requiring-type-checking", //
  ],
  overrides: [],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  // parser: '@typescript-eslint/parser', // deprecated
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "jsx-quotes": ["error", "prefer-double"], // double quotes in jsx dont throw error
    "react/jsx-props-no-spreading": ["warn"],
    "react/jsx-uses-react": ["off"],
    "no-shadow": "off",
    "no-underscore-dangle": "off",
  },
};
