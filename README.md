# byline

Fast line by line parsing of files in node.js.


## Installation

```sh

npm install byline --save

```

## Usage



```javascript

byLine = require('byline').byLine



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



## License

MIT


