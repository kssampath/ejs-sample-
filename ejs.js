var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();
app.use(bodyParser());
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen(8080,function(){
console.log('listening to 8080 port');
});

app.get('/',function(req,res){
res.render('index');
});//without injecting variables
app.get('/hero', function (req, res) {
	res.render('hero', {
		head : 'THE MOVIE WORLD',
		neck : 'THIS IS THE PLACE FOR HOT ACTRESS',
		actress : [
			{ name: 'RIYA RANJAN', age: '16' img: 'riya' },
			{ name: 'SAGRIKA CHAUHAN' ,age: '18' img: 'sag' },
			{ name: 'NEHA MAHESWARI' ,age: '20' img: 'neha'},
			{ name: 'KRITIKA KOUSHIK', age: '1infinity' img: 'krit' }
		]
	
					
					//with injecting variables
	});
});
