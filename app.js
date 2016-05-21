'use strict';

var express = require('express'),
    exphbs = require('express-handlebars'),
    hbs = exphbs.create(),
    app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(process.cwd() + "/assets"));

app.get('/', function(req, res){
    // res.send("<img src='http://stream1.gifsoup.com/view7/2903079/flipping-off-o.gif'/>");
    res.render('main');
});

app.listen(3000, function(){
    console.log('Listening on 3000');
});
