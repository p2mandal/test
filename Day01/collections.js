var mycollection = [1,2,true,"pune",false,null,23.345];
var countries = [];
countries["India"] = "New Delhi";
countries["US"] = "Washington DC";
countries["UK"] = "London";

for(var i=0;i<mycollection.length;i++){
	console.log(mycollection[i]);
}

for(var key in countries){
	console.log(key + ": " + countries[key])
}
console.log("******************")
var arr = [];
var arr2 = [1,2,3,45];
/*
	index(0) -> 1
	index(1) -> 2
	index(2) -> 3
	index(3) -> 45
*/
console.log(arr2[0]);
console.log(arr2[2]);
for(var i=0;i<arr2.length;i++){
	console.log(arr2[i]);
}
