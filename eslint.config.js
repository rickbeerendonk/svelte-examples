import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import ts from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    files: ['**/*.svelte', '**/*.svelte.ts'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    rules: {
      'no-debugger': 'warn',
      semi: ['error', 'always']
    }
  },
  // Allow unused variables in demo/example code with underscore prefix
  {
    files: ['**/server/**/*.js'],
    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    files: ['**/src/**/*.svelte'],
    rules: {
      // Disable base rule for .svelte files — it doesn't understand TypeScript
      // type annotations (e.g. parameter names in function types).
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    ignores: [
      '**/public/bundle.*',
      '**/dist-storybook/**',
      '**/coverage/**',
      '**/dist/**',
      '**/lib/**',
      '**/tmp/**',
      '**/temp/**',
      '**/node_modules/**',
      '**/.svelte-kit/**',
      '**/build/**',
      '**/dist-ssr/**',
      '**/package/**',
      '.eslintcache',
      'vite.config.js.timestamp-*',
      'vite.config.ts.timestamp-*',
      '11 - Stores/1. Writable/a. Set/ts/src/App.svelte'
    ]
  }
];
