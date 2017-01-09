var express=require('express');
var bodyParser=require('body-parser');

var app=express();
var port=process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
  res.status(200).send("Hello World");
});

app.post('/hello',(req,res,next)=>{
  console.log(req.body);
  var userName = req.body.user_name;
  var botPayload = {
    text: 'Hello ' + userName,

  };
  if(userName !== 'slackbot'){
    return res.status(200).json(botPayload);
  }else{
    res.status(200).end();
  }
});

app.listen(port, function() {
    console.log('running on port: '+port);
})
