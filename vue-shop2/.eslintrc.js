module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    // 文件规则
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 14把(空格)space禁用,vue use网站就不会编译错误
        'space-before-blocks': 0,
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}