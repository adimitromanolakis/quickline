# byline

Fast line by line parsing of files in node.js. Over 3x the speed of byline module.


## Installation

```sh

npm install quickline --save

```

## Usage



```javascript

byLine = require('quickline').byLine



var linecount = 0;

function process_line(x) {
    if(x[0] != "#") linecount ++;
}


function end() {
    console.log("Total lines:" + linecount);
}


var fs = require('fs')

var str = fs.createReadStream( '/etc/passwd', {encoding:'ascii'} )

byLine(str, process_line, end)



```

## Speed


byLine module speed:

```
time nodejs tests/test-byline.js
1022112

real    0m0.782s
user    0m0.760s
sys     0m0.060s

```

quickline module speed:

```
time nodejs tests/test1.js
1022112

real    0m0.221s
user    0m0.220s
sys     0m0.020s
```






## License

MIT


