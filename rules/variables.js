module.exports = {
  env: {
    browser: true
  },
  rules: {
    'init-declarations': ['error', 'always'],
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-restricted-globals': ['error', 'event'],
    'no-shadow': ['error', {
      builtinGlobals: true,
      hoist: 'all'
    }],
    'no-shadow-restricted-names': 'error',
    'no-undef': ['error', {
      typeof: true
    }],
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': ['error', {
      args: 'all',
      caughtErrors: 'all'
    }],
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: false
    }]
  }
};
