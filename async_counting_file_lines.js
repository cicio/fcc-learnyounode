var fs = require('fs');
var lines = undefined;

function countLines(callback) {
  fs.readFile(process.argv[2], 'utf8', function doneReading(error, fileContents) {
    if (error) return console.error(error);
    lines = fileContents.split('\n').length - 1;
    callback();  
  } );
}

function logLines() {
  console.log(lines);
}


countLines(logLines);
