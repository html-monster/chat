module.exports = {
  extends: [
    'standard',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  plugins: [
    'react',
    'import',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'import/extensions': ['error', 'never', { css: 'always', json: 'always' }],
    'max-len': ['error', 135],
    'no-console': 'error',
    'no-restricted-imports': ['warn', 'prop-types'],
    'no-unused-vars': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'require-await': 'error',
    'symbol-description': 'off',
    curly: [2, 'all'],
  },
}
