const express = require('express');
const app = express();
const mongoose = require('mongoose');

//body parser npm i -  post sent method use 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 
 
mongoose.connect("mongodb+srv://bhaji:t5Hnnqs24E6gt3B4@cluster0.dchmpj8.mongodb.net/nodesdb").then(function(){
        
        //routing ------------
        app.get('/', function(req, res){
            res.json({message: 'api data working...'});
        });
        
        const userRuter = require('./router/users');
        app.use('/user', userRuter);
});



//starting the sarver
const  PORT = process.env.PORT || 5080;
app.listen(PORT, function(){
    console.log("Server starting..."+ PORT);
});