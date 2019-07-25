# num2time
npm package for converting numbers to time display

## Install

```shell
npm i @nmaruy27/num2time

or 

yarn add @nmaruy27/num2time
```

## How to use
```js
import num2time from '@nmaruy27/num2time';

let result = num2time(99999, 'hms');
// { hh: '27', mm: '46', ss: '39', timeformat: '27:46:39' }

let result = num2time(99999, 'hm');
// { hh: '27', mm: '46', ss: '39', timeformat: '27:46' }

let result = num2time(99999, 'h');
// { hh: '27', mm: '46', ss: '39', timeformat: '27' }

let result = num2time(99999, 'hms', '/');
// { hh: '27', mm: '46', ss: '39', timeformat: '27/46/39' }
```