module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'jsx-a11y',
    'import',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-one-expression-per-line': 'off',
    'global-require': 'off',
    'react-native/no-raw-text': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    // Permitir a alteração de parâmetros recebidos em uma função
    'no-param-reassign': 'off',
    // Evitar que o uso do console.tron gere alerta por parte do ESLint
    'no-console': ['error', { allow: ['tron'] }],
    // Alterar a validação de declaração de variáveis antes de componentes
    'react/sort-comp': 'off',
    // Criar estados dentro da classe, sem precisar utilizar constructor
    'react/state-in-constructor': 'off',
    // Criar variáveis estáticas, como a propTypes, dentro da sua classe
    'react/static-property-placement': 'off',
    'import/no-extraneous-dependencies': ['error',  {'devDependencies': true}],
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
