var express = require('express')
var app = express()
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

var records = {"records":[{"transaction":{"apicalls":[{"correlation_id":"sdft34aef3q4t","downstream_calls":[{"service":"mayfly"},{"service":"userread"},{"service":"merchant preferences"}],"end_time":"435344352345","endpoint":"post.v1.carts.cart","start_time":"2453464563463"},{"correlation_id":"sdft34aef3q4t","downstream_calls":[{"service":"mayfly"},{"service":"fundingpolicyservice"}],"end_time":"435344352345","endpoint":"get.v1.carts.eligiblepaymentmethods","start_time":"2453464563463"},{"correlation_id":"sdft34aef3q4t","downstream_calls":[{"service":"mayfly"},{"service":"moneyplanningservice"}],"end_time":"435344352345","endpoint":"post.v1.carts.gfo","start_time":"2453464563463"},{"correlation_id":"sdft34aef3q4t","downstream_calls":[{"service":"mayfly"},{"service":"fulfillmentinternalserv"},{"service":"PLS"}],"end_time":"435344352345","endpoint":"post.v1.carts.pay","start_time":"2453464563463"}],"token":"EC-1233542GR1232354"}}]};

 

  app.get('/home/:stage', function(req, res){
		res.json(records);
 });

 app.get('/home/', function(req, res){
		res.json(records);
 });


 app.get('*', function(req, res) {
 	res.json(records);

       // res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

})