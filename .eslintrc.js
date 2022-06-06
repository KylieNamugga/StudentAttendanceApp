module.exports = {
    env: {
      browser: true,
      es2021: true,
      mocha: true,
      chai:true
    },
    extends: ['eslint:recommended', 'airbnb-base'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    
    // rules: {
    //   "no-unused-expression": true
  
    // },
  };
  