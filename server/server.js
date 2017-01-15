var express = require('express');
var path = require('path');
var app = express();
var port = 8080;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static(__dirname +'../src'));

var adat = [];
var avg = 0;
var avg = [];
var i=0;

app.post('/post', function(req, res){
    console.log(req.body.data); 
    res.send('200').end(); 
    adat.push(data);
    avg.push(this.calcAvg);
});
app.get('/get_avg', function(req, res){
  
});

function calcAvg(){
    for(i=0; i <= adat.lastIndexOf(data); i++){
        avg+=avg[i];
    }
    return avg/i;
}


app.listen(port);