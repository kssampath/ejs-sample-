var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

var app = express();
app.use(bodyParser());
app.use(cors());
app.use(expressLayouts());
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
			{ name: 'RIYA RANJAN', age: '16' },
			{ name: 'SAGRIKA CHAUHAN' ,age: '18' },
			{ name: 'NEHA MAHESWARI' ,age: '20' },
			{ name: 'KRITIKA KOUSHIK', age: '1infinity' }// I am 20 years old -Omkar
		]
		//with injecting variables
	});
});