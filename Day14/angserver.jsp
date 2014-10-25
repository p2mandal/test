<%
		String name = request.getParameter("name");
		String output = "Hello " + name;
		out.println("angular.callbacks._0({\"info\":\"" + output + "\"})");
%>