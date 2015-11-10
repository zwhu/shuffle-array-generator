# shuffle-array-generator

generator a shuffle array

## Install

```shell
  $ npm i shuffle-array-generator
```

## Example 


```javascript

import shuffle from './index'

let init = ['a', 'b', 'd', 'c', 'f', 'g', 'h']
shuffle(init) // => [ 'h', 'b', 'd', 'a', 'g', 'c', 'f' ]
init //=> ['a', 'b', 'd', 'c', 'f', 'g', 'h']


shuffle(3, 20) // => [ 14, 3, 15, 19, 18, 8, 5, 13, 6, 9, 16, 4, 17, 12, 7, 10, 11, 20 ]

```

## API

shuffle([array, [begin, end]])

### Parameters

1. array   return new shuffled array
2. begin, end   return shuffled array from begin to end


## License

MIT