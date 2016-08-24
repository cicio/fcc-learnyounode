function fileNewLines() {
  var fs = require('fs');
  var buf = fs.readFileSync(process.argv[2]);
  var result = buf.toString().split('\n').length - 1;
  console.log(result);
      //note you can avoid the .toString() by passing 'utf8' as the  
     // second argument to readFileSync, then you'll get a String!  
     //  
     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1  
}

fileNewLines();
