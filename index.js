var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/api/book',function(req,res){
	var books = [
		{title: 'Ragnarok', price: 200},
		{title: 'Maple', price: 300},
		{title: 'Yulgang', price: 400}
	];
	res.send(books);
})

var server = app.listen(3000, function () {

  	console.log("server is running")

})