var userDetails;
var httpRequest;
function storeData(){
	console.log("in store data func");
	 userDetails = {
        firstname : document.getElementById("firstname").value,
        lastname : document.getElementById("lastname").value,
        email :  document.getElementById("email").value,
        password1 : document.getElementById("password1").value,
        dob1 : document.getElementById("dob1").value,
        dob3 : document.getElementById("dob3").value,
        ssn : document.getElementById("ssn").value,
        phone_no : document.getElementById("phone_no").value,
        creditcard : document.getElementById("creditcard").value,
        url : document.getElementById("url").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value
    };
    console.log("in store data func end ");
    handleButtonRequest();
    console.log("in store data func checkng vl"+JSON.stringify(userDetails));
}

function handleButtonRequest(e){
	//e.preventDefault();
	console.log("in handle request func");

	try
	{
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadstatechange = handleResponse;
		httpRequest.open("POST", "http://localhost:8800/servernew.js",true);
		httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		 console.log("in andle button request "+JSON.stringify(userDetails));
		httpRequest.send(JSON.stringify(userDetails));
	}
	catch(err)
	{
		console.log("Error is"+err);
	}
}
function handleResponse(e){
		console.log("in handle response func");

	if(httpRequest.readyState == 4 && httpRequest.status == 200)
	{
		console.log("this is hanfle rpsoense" +httpRequest.responseText);
		//document.getElementById("btn1").innerHTML	= httpRequest.responseText;
	}
}