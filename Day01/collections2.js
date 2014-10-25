var cities = [];
cities["India"] = ["Chennai","Pune","Mumbai"];
cities["USA"] = ["NY","NJ","Houston"];
cities["UK"] = ["Essex","London","Bristol"];

for(var key in cities){
	var country = key;
	var citiesCollection = cities[key];
	console.log("Cities in " + country);
	for(var i=0;i<citiesCollection.length;i++){
		console.log(citiesCollection[i]);
	}
}