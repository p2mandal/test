<%
	//response.addHeader("Access-Control-Allow-Origin","http://localhost:9090");
	String callbackKey = request.getParameter("callback");
	if("pune".equals(callbackKey)){
		String name = request.getParameter("name");
		String output = "Hello " + name;
		out.println("pune({\"info\":\"" + output + "\"})");
	}
%>