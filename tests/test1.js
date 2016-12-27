

// byLine = require('byline').byLine
byLine = require('..').byLine




var linecount = 0;

function process_line(x) {
    if(x[0] != "#") linecount ++;
}


function end() {
    console.log("Total lines:" + linecount);
}


var fs = require('fs')

var str = fs.createReadStream( '/var/log/kern.log.1', {encoding:'ascii'} )

byLine(str, process_line, end)

