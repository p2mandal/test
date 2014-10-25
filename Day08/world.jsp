<%
	String country = request.getParameter("country");
	String output = "{\"capital\":\"NA\",\"continent\":\"NA\"}";
	if("India".equals(country))
		output = "{\"capital\":\"New Delhi\",\"continent\":\"Asia\"}";
	else if("USA".equals(country))
		output = "{\"capital\":\"Washington DC\",\"continent\":\"North America\"}";
	else if("UK".equals(country))
		output = "{\"capital\":\"London\",\"continent\":\"Europe\"}";
	
	out.println(output);
%>