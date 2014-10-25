var GLOBAL = {
	data : {},
	searchResults : []
};
function searchAirports(){
	GLOBAL.searchResults = [];
	var airportEntered = $("#fromtextbox").val();
	if(airportEntered.trim().length > 0){
		for(var i=0;i<GLOBAL.data.airports.length;i++){
			var airport = GLOBAL.data.airports[i];
			var city = airport.city;
			if(city.search(airportEntered) > -1)
				GLOBAL.searchResults.push(airport);
		}
	}
	else
		GLOBAL.searchResults = GLOBAL.data.airports;
}
