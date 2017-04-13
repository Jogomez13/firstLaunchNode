var express = require ('express');

var serveur = express();

server.get("/",function(request,response){
  response.send("message");
});

server.get("/toto",function(request,response){
  response.sendFile(__dirname + "view/index.html");
});


server.listen(process.env.PORT || 12107);
