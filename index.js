
"use strict";


var fs = require('fs');


function byLine(stream, fline, fend) {

    var rest = ''

    stream.on('data', function(chunk) {

        var q = chunk.toString('ascii').split("\n");

        var l = q.length;

        q[0] = rest + q[0];

        for(var i=0;i<l-1;i++) fline(q[i]);

        rest = q[l-1];

    });


    stream.on('end',  fend );

}


function byLineUTF8(stream, fline, fend) {

    var rest = ''

    stream.on('data', function(chunk) {

        var q = chunk.toString('utf-8').split("\n");

        var l = q.length;

        q[0] = rest + q[0];

        for(var i=0;i<l-1;i++) fline(q[i]);

        rest = q[l-1];

    });


    stream.on('end',  fend );

}



module.exports = {
    byLine: byLine,
    byLineUTF8: byLineUTF8
}
