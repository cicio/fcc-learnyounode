var fs = require('fs');
var path = require('path');

function filteredLs() {

  var extension = "." + process.argv[3].toString();

  fs.readdir(process.argv[2], function doneReading(error, dirList) {
    if (error) return console.error(error);
    var list = dirList.filter( function (f) {
      if (path.extname(f) == extension) return f;
    });
   list = list.join().replace(/,/g, "\n");
   console.log(list);

  } );

}

filteredLs();


//Solution from learnyounode
//var fs = require('fs');

//function filteredLs() {
//  var extension = "." + process.argv[3].toString();
//  fs.readdir(process.argv[2], function doneReading(error, dirList) {
//    if (error) return console.error(error);
//    var list = dirList.filter( function (file) {
//      path.extname(file) == extension;
//    });
//    console.log(list)  
//  } );
//}

