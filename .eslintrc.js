module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
    plugins: [],

    // add your custom rules here
    rules: {
        'no-console': 'off',
        'vue/script-indent': ['error', 4, { baseIndent: 1 }],
        'vue/html-indent': ['error', 4, { baseIndent: 1 }],

        // recommended by Vetur
        'vue/html-self-closing': 'off',

        // semi: ['error', 'never'],

        // add parens ony when required in arrow function
        'arrow-parens': ['error', 'always'],

        // add new line above comment
        'lines-around-comment': ['error', {
                beforeBlockComment: true,
                beforeLineComment: true,
                allowBlockStart: true,
                allowClassStart: true,
                allowObjectStart: true,
                allowArrayStart: true,
            },
        ],
        'linebreak-style': 'off',

        // add new line above comment
        'newline-before-return': 'error',

        // add new line below import
        'import/newline-after-import': ['error', { count: 1 }],
        'global-require': 'off',
    },
}
