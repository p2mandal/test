window.onload = init;
var xhr;
function loadCities(){
	xhr = new XMLHttpRequest();
	xhr.open("GET","cities.jsp");
	xhr.onreadystatechange = getCities;
	xhr.send();
}
function getCities(){
	if(xhr.readyState == 4){
		var response = xhr.responseText;
		var arr = response.split(",");
		var output = "";
		for(var i=0;i<arr.length;i++){
			output += "<option>" + arr[i] + "</option>";
		}
		document.getElementById("fromlb").innerHTML = "<option>TYPE DEPARTURE CITY</option>" + output;
		document.getElementById("tolb").innerHTML = "<option>TYPE DESTINATION CITY</option>" + output;
	}
}

function init(){
	loadCities();
	document.getElementById("onewayrbtn").onchange = selectJourney;
	document.getElementById("roundtriprbtn").onchange = selectJourney;

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