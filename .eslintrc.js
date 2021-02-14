module.exports = {
  root: true,
  extends: [
    'plugin:prettier/recommended',
    '@react-native-community',
    'prettier/flowtype',
    'prettier/react',
  ],

  rules: {
    'prettier/prettier': 'error',
    'prettier/prettier': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'eslint-plugin/report-message-format': ['error', '^[A-Z].*\\.$'],
  },
  plugins: ['prettier', 'eslint-plugin'],
};
