# Count Chinese

![npm](https://img.shields.io/npm/v/count-chinese?style=flat-square)

Count the number of Chinese (Mandarin) character in a string.

- Work for both simplified and traditional Chinese.
- Doesn't count everything else other than Chinese character (space, number, symbol, etc. are all ignored)

## Install
```
npm install count-chinese
```

## Usage
```js
const countChinese = require('count-chinese');
countChinese('Hi!，我是台灣人。') // count = 5
```