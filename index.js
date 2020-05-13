var express = require('express');
var path = require('path');
var app = express();

app.get('/' , function(req,res){
  res.json('404 Not Found');
});

app.get('/index' , function(req,res){
  res.sendfile(path.join(__dirname , '/index.html'));
});
var server = app.listen(3000 , function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Running at http://localhost:%s" , port);
});
