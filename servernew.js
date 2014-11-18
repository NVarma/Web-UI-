
var mysql = require('mysql');
var http = require('http');
var url = require('url');

http.createServer(function (request,response){
	 console.log("in create server ");
	var formdata = "";
	request.on("data", function(data){
	formdata += data;
	 console.log("in req.on func ");
	});
	
	request.on('end', function(){
		 console.log("in req.on end func1 ");
		try {
		var dataObj = JSON.parse(formdata);
		var firstname = JSON.stringify(dataObj.firstname);
		var lastname = JSON.stringify(dataObj.lastname);
		var email = JSON.stringify(dataObj.email);
		var password1 = JSON.stringify(dataObj.password1);
		var dob1 = JSON.stringify(dataObj.dob1);
		var dob3 = JSON.stringify(dataObj.dob3);
		var ssn = JSON.stringify(dataObj.ssn);
		var phone_no = JSON.stringify(dataObj.phone_no);
		var creditcard = JSON.stringify(dataObj.creditcard);
		var url = JSON.stringify(dataObj.url);
		var age = JSON.stringify(dataObj.age);
		var gender = JSON.stringify(dataObj.gender)
	}
	catch(err)
	{
		console.log("error with json.parse"+err);
	}


		function db1(){
		var connection = mysql.createConnection( {host: 'localhost', user: 'root', password: 'root', port: 3305, database: 'test'}); return connection;}
		var objectDataB = db1();
		console.log("in db1 method..connection establshd ");
			console.log("data is "+dataObj);
	objectDataB.query("INSERT INTO registration1(firstname, lastname, email, password1, dob1, dob3, ssn, phone_no, creditcard, url, age, gender) VALUES ('"+firstname+"','"+lastname+"','"+email+"','"+password1+"','"+dob1+"','"+dob3+"','"+ssn+"','"+phone_no+"','"+creditcard+"','"+url+"','"+age+"','"+gender+"');", function (err){
		objectDataB.end();
		if(err) throw err;
		response.writeHead(	200, {
			'Content-Type': 'text/plain',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST'});

		response.end("database enrty made");
	});
});
}).listen(8800);
	console.log("server is listening to port 8888");		
