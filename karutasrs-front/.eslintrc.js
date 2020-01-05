module.exports = {
	root          : true,
	parser        : 'babel-eslint',
	parserOptions : {
		ecmaVersion : 2018,
		sourceType  : 'module'
	},
	plugins : [
		'ember'
	],
	extends : [
		'eslint:recommended',
		'plugin:ember/recommended'
	],
	env : {
		browser : true
	},
	rules : {
		"array-bracket-newline" : [
			"error",
			"consistent"
		],
		"curly" : [
			"error",
			"all"
		],
		"dot-location" : [
			"error",
			"property"
		],
		"dot-notation"                           : "error",
		"ember/jquery-ember-run"                 : 0,
		"ember/no-global-jquery"                 : 0,
		"ember/no-unnecessary-route-path-option" : 0,
		"eqeqeq"                                 : "error",
		"grouped-accessor-pairs"                 : "error",
		"indent"                                 : [
			"error",
			"tab",
			{
				SwitchCase : 1
			}
		],
		"key-spacing" : [
			"error",
			{
				beforeColon : true,
				align       : "colon"
			}
		],
		"multiline-ternary" : [
			"error",
			"always-multiline"
		],
		"newline-per-chained-call" : "error",
		"no-extend-native"         : "error",
		"no-lonely-if"             : "error",
		"no-multi-assign"          : "error",
		"no-return-assign"         : "error",
		"no-sequences"             : "error",
		"no-trailing-spaces"       : "error",
		"object-curly-newline"     : [
			"error",
			{
				consistent : true
			}
		],
		"object-property-newline" : [
			"error",
			{
				allowAllPropertiesOnSameLine : true
			}
		],
		"operator-assignment" : "error",
		"padded-blocks"       : [
			"error",
			"never"
		],
		"padding-line-between-statements" : [
			"error",
			{
				blankLine : "always",
				prev      : [
					"const",
					"let",
					"var"
				],
				next : "*"
			},
			{
				blankLine : "any",
				prev      : [
					"const",
					"let",
					"var"
				],
				next : [
					"const",
					"let",
					"var"
				]
			},
			{
				blankLine : "always",
				prev      : "const",
				next      : [
					"let",
					"var"
				]
			},
			{
				blankLine : "always",
				prev      : "let",
				next      : [
					"const",
					"var"
				]
			},
			{
				blankLine : "always",
				prev      : "var",
				next      : [
					"const",
					"let"
				]
			},
			{
				blankLine : "always",
				prev      : "block-like",
				next      : "*"
			}
		],
		"require-await" : "error",
		"semi-style"    : "error",
		"yoda"          : "error"
	},
	globals : {
		"$" : "readonly"
	},
	overrides : [
		// node files
		{
			files : [
				'.ember-cli.js',
				'.eslintrc.js',
				'.template-lintrc.js',
				'ember-cli-build.js',
				'testem.js',
				'blueprints/*/index.js',
				'config/**/*.js',
				'lib/*/index.js',
				'server/**/*.js'
			],
			excludedFiles : [
				'app/**',
			],
			parserOptions : {
				sourceType  : 'script',
				ecmaVersion : 2015
			},
			env : {
				browser : false,
				node    : true
			},
			plugins : [
				'node'
			],
			rules : Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
				// add your custom rules and overrides for node files here

				// this can be removed once the following is fixed
				// https://github.com/mysticatea/eslint-plugin-node/issues/77
				'node/no-unpublished-require' : 'off'
			}),
			extends : [
				'plugin:node/recommended'
			],
		}
	]
};
