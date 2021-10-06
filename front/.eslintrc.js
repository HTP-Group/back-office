module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
		'@vue/typescript/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-param-reassign': 0,
		'class-methods-use-this': 0,
		'no-underscore-dangle': 0,
		indent: [2, 'tab'],
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': 0,
	},
};
