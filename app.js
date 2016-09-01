var express = require('express');
var app = express();
var port = 8000;

app.listen(port, function(err, res){
  if (err)  {
    console.log('server error');
  }
  else {
    console.log('server is running');
  }
});
console.log('server started......port:' + port);
