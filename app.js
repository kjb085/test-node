'use strict';

let express = require('express'),
    app = express();

app.get('/', function(req, res){
    // res.send("<img src='http://stream1.gifsoup.com/view7/2903079/flipping-off-o.gif'/>");
    res.render('main');
});

app.listen(3000, function(){
    console.log('Listening on 3000');
});
