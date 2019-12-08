module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array
    ],
    plugins: ['@typescript-eslint'],
    /*     parserOptions: {
            ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
            sourceType: 'module',  // Allows for the use of imports
        }, */
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'class-methods-use-this': 0,
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
    settings: {
        'import/resolver': {
            'node': {
                'extensions': [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
};