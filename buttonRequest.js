var userDetails;
var httpRequest;

function isEmailValid(email) {
			var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			var email = document.getElementById("email");
			if (email.value.match(re)) {
				/*alert("valid email");*/
				return true;
			} else {
				alert("please enter a valid email address");
				email.focus();
				return false;
			}

		};

	function validatePassword() {

			var regex = /^(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[#$@!%&*?]{2})([A-Za-z0-9\d#$@!%&*?]{7,24})/;
			var regex1 = /^(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[#$@!%&*?]{3,5})([A-Za-z0-9\d#$@!%&*?]{8,24})/;
			var regex2 = /^(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[#$@!%&*?]{6,19})([A-Za-z0-9\d#$@!%&*?]{11,24})/;
			var password1 = document.getElementById("password1").value;

			if (!regex.test(password1)) {
				alert("password must contain minimum 3 upper case, 2 lower case and 2 special characters");
			} else {
				document.getElementById("progress").value = 33;
			}

			if (!regex1.test(password1)) {
			} else {
				document.getElementById("progress").value = 66;
			}

			if (!regex2.test(password1)) {
			} else {
				document.getElementById("progress").value = 100;
			}

		};

		function matchPassword() {

			var password1 = document.getElementById("password1").value;
			var password2 = document.getElementById("password2").value;

			if (password1 == password2) {
				/*alert("password matches");*/

			} else {
				alert("password dosent match");
			}

		};

		function isPhoneNoValid(phone_no) {
			var reg1 = /^\(?\d{3}\)?-\d{3}-\d{4}$/;
			var phone_no = document.getElementById("phone_no");
			if (phone_no.value.match(reg1)) {
				/*alert("valid phone number");*/
				return true;
			} else {
				alert("please enter a valid phone number");
				return false;
				phone_no.focus();
			}
		};

		function isSSNValid(ssn) {
			var reg2 = /^\d{3}-\d{2}-\d{4}$/;
			var ssn = document.getElementById("ssn");
			if (ssn.value.match(reg2)) {
				/*alert("valid SSN");*/
				return true;
			} else {
				alert("please enter a valid SSN");
				return false;
				ssn.focus();
			}
		};

		function isCreditCardValid(creditcard) {
			var reg3 = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
			var creditcard = document.getElementById("creditcard");
			if (creditcard.value.match(reg3)) {
				/*alert("valid credit card number");*/
				return true;
			} else {
				alert("please enter a valid credit card number");
				return false;
				creditcard.focus();
			}
		};

		var val = document.getElementById("select").innerHTML;
		var imgValue;
		val = Math.floor(3 * Math.random());
		if (val === 0) {
			document.getElementById("select").innerHTML = "Drag and drop angular.js";
			imgValue = "angular";
		}
		if (val === 1) {
			document.getElementById("select").innerHTML = "Drag and drop ember.js";
			imgValue = "ember";
		}
		if (val === 2) {
			document.getElementById("select").innerHTML = "Drag and drop node.js";
			imgValue = "node";
		}

		var src = document.getElementById("src");
		var target = document.getElementById("target");
		var msg = document.getElementById("msg");
		var draggedID;
		target.ondragenter = handleDrag;
		target.ondragover = handleDrag;

		target.ondrop = function(e) {
			var newElem = document.getElementById(draggedID).cloneNode(false);
			target.innerHTML = "";
			target.appendChild(newElem);
			e.preventDefault();
		}
		function handleDrag(e) {
			e.preventDefault();
		}
		src.ondragstart = function(e) {
			draggedID = e.target.id;
			e.target.classList.add("dragged");
		}
		src.ondragend = function(e) {
			var elems = document.querySelectorAll(".dragged");
			console.log(draggedID);
			console.log(imgValue);
			for (var i = 0; i < elems.length; i++) {
				elems[i].classList.remove("dragged");
			}

			if (draggedID == imgValue) {
				document.getElementById("btn1").disabled = false;

			}
		}
function storeData(){
	console.log("in store data func");
	 userDetails = {
		firstname : document.getElementById("firstname").value,

	   // or firstname: Crypto.MD5(document.getElementById("fitstname").value), 
	  // -- use the above way to encrypt the data 

		lastname : document.getElementById("lastname").value,
		email :  document.getElementById("email").value,
		password1 : document.getElementById("password1").value,
		dob1 : document.getElementById("dob1").value,
		dob3 : document.getElementById("dob3").value,
		ssn : document.getElementById("ssn").value,
		phone_no : document.getElementById("phone_no").value,
		creditcard : document.getElementById("creditcard").value
	};
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
		console.log(httpRequest.responseText);	
	}
	else
	{
		alert("there was a problem with the request");
	}
}