module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        '@typescript-eslint/no-inferrable-types': ['off'],
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-explicit-any': 0,

        indent: ['error', 4],
        semi: ['error', 'always'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
                switchCase: 1,
                ignores: []
            }
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ]
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true
            }
        },
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ]
};
