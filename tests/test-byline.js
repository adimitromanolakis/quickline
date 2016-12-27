
var fs = require('fs'),
    byline = require('byline');
 
var stream = byline(fs.createReadStream('s', { encoding: 'utf8' }));

lc=0;
stream.on('data', function(line) {
lc++;

});

stream.on('end', function() { console.log(lc); } )


