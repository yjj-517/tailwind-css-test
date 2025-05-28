// @see: https://eslint.cn

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
	{
		ignores: ["node_modules", "dist"], // 忽略 dist 文件夹
	},
	{
		// files: ["**/*.{js,jsx,ts,tsx,vue}"], // 匹配文件
		languageOptions: {
			parser: tsParser, // 优先级低于parse的语法解析配置
			ecmaVersion: 2020, //ECMAScript语法-2020年
			sourceType: "module", //正在使用的模块类型
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser, // 浏览器全局变量
			},
		},
		extends: [
			eslint.configs.recommended, // 使用 eslint 推荐的 JavaScript 配置
			...tseslint.configs.recommended, // 使用 eslint 推荐的 TypeScript 配置
			prettierRecommended, // 使用 Prettier 插件推荐规则
		],
		plugins: {
			react,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			"@typescript-eslint": tseslintPlugin,
			prettier,
		},
		rules: {
			/*
			 * "off" 或 0    ==>  关闭规则
			 * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
			 * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
			 *  eslint (http://eslint.cn/docs/rules)
			 */
			"prettier/prettier": "error", // 编辑器里会给prettier错误进行报错
			//  eslint (http://eslint.cn/docs/rules)
			"no-var": "error", // 要求使用 let 或 const 而不是 var
			"no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
			"no-use-before-define": "error", // 禁止在 函数/类/变量 定义之前使用它们
			"prefer-const": "error", // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
			"no-irregular-whitespace": "error", // 禁止不规则的空白
			"no-console": ["off", { allow: ["info", "warn", "error", "debug"] }], //禁用console
			// typeScript (https://typescript-eslint.io/rules)
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
				},
			], // 禁止定义未使用的变量
			"@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
			"@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
			"@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
			"@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 @ts-ignore
			"@typescript-eslint/ban-types": "off", // 禁止使用特定类型
			"@typescript-eslint/explicit-function-return-type": "off", // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
			"@typescript-eslint/no-var-requires": "off", // 不允许在 import 语句中使用 require 语句
			"@typescript-eslint/no-empty-function": "off", // 禁止空函数
			"@typescript-eslint/no-use-before-define": "off", // 禁止在变量定义之前使用它们
			"@typescript-eslint/ban-ts-comment": "off", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
			"@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
			"@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和类的公共类方法的显式返回和参数类型
			// react (https://github.com/jsx-eslint/eslint-plugin-react)
			"react-hooks/rules-of-hooks": "off",
			"react-hooks/exhaustive-deps": "off",
			"react/no-unescaped-entities": "off", // 允许在 JSX 中使用未转义的字符
		},
	},
);
