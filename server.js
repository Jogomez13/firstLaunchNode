var express = require ('express');

var serveur = express();

serveur.get("/",function(request,response){
  response.send("message");
});

serveur.get("/toto",function(request,response){
  response.sendFile(__dirname + "view/index.html");
});


serveur.listen(process.env.PORT || 12107);
