module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended', // 使用 Vue 3 推荐的规则
        'prettier' // 如果你使用 Prettier
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        // 在这里添加你的自定义规则
        'no-unused-vars': 'off',
    },
}
