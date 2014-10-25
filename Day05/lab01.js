window.onload = init;
var xhr;
function loadCities(){
	console.log("loadCities");
	xhr = new XMLHttpRequest();
	xhr.open("GET","cities.jsp");
	xhr.onreadystatechange = getCities;
	xhr.send();
}
function getCities(){
	if(xhr.readyState == 4){
		var response = xhr.responseText;
		console.log(response);
		localStorage.setItem("cities",response);
		displayCitiesInLB(response);
	}
}
function displayCitiesInLB(cities){
	var arr = cities.split(",");
	var output = "";
	for(var i=0;i<arr.length;i++){
		output += "<option>" + arr[i] + "</option>";
	}
	document.getElementById("fromlb").innerHTML = "<option>TYPE DEPARTURE CITY</option>" + output;
	document.getElementById("tolb").innerHTML = "<option>TYPE DESTINATION CITY</option>" + output;
}

function login(){
	var userName = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(userName == "admin"  && password == "admin"){
		var keepMeSigned = document.getElementById("keepmesignedchk");
		if(keepMeSigned.checked){
			localStorage.setItem("sillyname","werkjg091034134132pij");
			document.getElementById("login").style.display = "none";
			document.getElementById("home").style.display = "block";
		}
	}
}
function logout(){
	localStorage.removeItem("sillyname");
	document.getElementById("login").style.display = "block";
	document.getElementById("home").style.display = "none";
}
function init(){
	if(localStorage.getItem("sillyname") != null){
		//get the value of sillyname
		//send it to the server
		//authenticate it AND then
		document.getElementById("login").style.display = "none";
		document.getElementById("home").style.display = "block";

	}
	if(localStorage.getItem("cities") == null)
		loadCities();
	else{
		var cities = localStorage.getItem("cities");
		displayCitiesInLB(cities);
	}
	document.getElementById("onewayrbtn").onchange = selectJourney;
	document.getElementById("roundtriprbtn").onchange = selectJourney;

	document.getElementById("loginbutton").onclick = login;
	document.getElementById("logoutlink").onclick = logout;

	document.getElementById("adultplusbtn").onclick = selectPassengers;
	document.getElementById("adultminusbtn").onclick = selectPassengers;
	document.getElementById("childplusbtn").onclick = selectPassengers;
	document.getElementById("childminusbtn").onclick = selectPassengers;
	document.getElementById("infantplusbtn").onclick = selectPassengers;
	document.getElementById("infantminusbtn").onclick = selectPassengers;
}
function selectPassengers(src){
	var srcId = src.target.id; //adultplusbtn adulttextbox
	var index = srcId.indexOf("p") == -1 ? srcId.indexOf("m") : srcId.indexOf("p");
	var temp = srcId.substring(0,index);
	var textboxId = temp + "textbox";
	var textbox = document.getElementById(textboxId);
	if(srcId.indexOf("p") == -1 ){
		if(textboxId.substring(0,5) == "adult" && (parseInt(textbox.value) > 1))
			textbox.value = parseInt(textbox.value) - 1;
		else if(textboxId.substring(0,5) != "adult" && parseInt(textbox.value) > 0)
			textbox.value = parseInt(textbox.value) - 1;
	}
	else
		textbox.value = parseInt(textbox.value) + 1;		

}
function selectJourney(src){
	var returnDateTextbox = document.getElementById("returndate");
	if(document.getElementById("roundtriprbtn").checked)
		returnDateTextbox.disabled = false;		
	else 
		returnDateTextbox.disabled = true;		
}