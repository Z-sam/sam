var express=require('express');
var app=express();

app.get('/', function (req,res){
  res.send('hello world <b>meh lai </b>ga!');
});


app.get("/mypath", function (req, res){
res.send('mypath');
});

app.listen(3000, function(){
console.log('Example app listening on port 3000!');
});
