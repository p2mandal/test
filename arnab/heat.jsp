<%
	String callbackKey = request.getParameter("callback");
	if("JSON_CALLBACk".equals(callbackKey)){
		String name = request.getParameter("name");
		out.println("JSON_CALLBACk({"coord":{"lon":-83.07,"lat":39.85},"sys":{"type":1,"id":2191,"message":0.0215,"country":"USA","sunrise":1413459861,"sunset":1413499863},"weather":[{"id":301,"main":"Drizzle","description":"drizzle","icon":"09n"},{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"base":"cmc stations","main":{"temp":11.67,"pressure":1007,"humidity":93,"temp_min":10,"temp_max":13},"wind":{"speed":2.41,"deg":176.001},"clouds":{"all":90},"dt":1413443700,"id":4513409,"name":"Grove City","cod":200});
");
	}
%>