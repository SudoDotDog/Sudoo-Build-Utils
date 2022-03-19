# Sudoo-Build-Utils

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Build-Utils/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Build-Utils/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Build-Utils/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Build-Utils)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fbuild-utils.svg)](https://www.npmjs.com/package/@sudoo/build-utils)
[![downloads](https://img.shields.io/npm/dm/@sudoo/build-utils.svg)](https://www.npmjs.com/package/@sudoo/build-utils)

Build Utils for JS

## Install

```sh
yarn add @sudoo/build-utils --dev
# Or
npm install @sudoo/build-utils --save-dev
```

## CLI Usage

```sh
npx build-utils clean-path <PATH>
```

## Package Usage

```ts
import { buildUtilCleanPath } from "@sudoo/build-utils";

buildUtilCleanPath("Path");
```
