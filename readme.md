# convert-to-spaces [![Build Status](https://travis-ci.org/vdemedes/convert-to-spaces.svg?branch=master)](https://travis-ci.org/vdemedes/convert-to-spaces)

> Convert tabs to spaces in a string

Supports multiline strings as well.

## Install

```
$ npm install --save convert-to-spaces
```


## Usage

```js
const convertToSpaces = require('convert-to-spaces');

convertToSpaces('\t\thello!');
//=> '    hello!'
```


## API

### convertToSpaces(str, [spaces])

#### str

Type: `string`

Source string.

#### spaces

Type: `number`<br>
Default: `2`

Number of spaces instead of each tab.


## Related

- [convert-to-tabs](https://github.com/vdemedes/convert-to-tabs) - Convert spaces to tabs.


## License

MIT © [vdemedes](https://github.com/vdemedes)
