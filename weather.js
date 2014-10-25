window.onload = init;
function init(){
	goToStockMarket();
	window.setInterval("goToStockMarket()",10000);
}

function goToStockMarket(){
	var symbols = ["MS", "GOOG", "INTC", "AAPL", "GM", "FB", "INFY", "HP"];
	for(var i=0;i<symbols.length;i++){
		Accenture.ajax({
			url : "http://localhost:8080/pt-14/weather.json",
			callback : 	displayResults
		});		
	}
	document.getElementById("stockstbody").innerHTML = "";
}

function displayResults(response){
	var obj = JSON.parse(response);
	var symbol = obj.query.results.quote.symbol;
	var price = obj.query.results.quote.LastTradePriceOnly;
	var change = obj.query.results.quote.Change;
	var stocksTbody = document.getElementById("stockstbody");
	var row = "<tr>";
	row += "<td>" + symbol + "</td>";
	row += "<td>" + price + "</td>";
	if(change.indexOf("+") != -1)
		row += "<td style='background-color:green;'>" + change + "</td>";
	else
		row += "<td style='background-color:red;'>" + change + "</td>";
	row += "</tr>";
	stocksTbody.innerHTML = stocksTbody.innerHTML + row;
}