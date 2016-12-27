

// byLine = require('byline').byLine
byLine = require('..').byLine




var linecount = 0;

function process_line(x) {
    // if(x[0] != "#") linecount ++;
    linecount ++;
}


function end() {
    console.log("Total lines:" + linecount);
}


var fs = require('fs')

var str = fs.createReadStream( 's', {encoding:'ascii'} )

byLine(str, process_line, end)

