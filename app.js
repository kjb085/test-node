'use strict';

let express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(3000, function(){
    console.log('Listening on 3000');
});
