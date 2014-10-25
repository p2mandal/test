<html>
	<body>
		<%
			Thread.sleep(5000);
			String country = request.getParameter("country");
			if("India".equals(country)){
				out.println("<h1>India</h1>");
				out.println("<h2>New Delhi</h2>");
				out.println("<h3>Asia</h3>");
			}
			else if("USA".equals(country)){
				out.println("<h1>USA</h1>");
				out.println("<h2>Washington DC</h2>");
				out.println("<h3>NA</h3>");
			}
			else if("UK".equals(country)){
				out.println("<h1>UK</h1>");
				out.println("<h2>London</h2>");
				out.println("<h3>Europe</h3>");
			}
			else{
				out.println("<h1>" + country + "</h1>");
				out.println("<h2>Not available in DB</h2>");
			}
		%>
	</body>
</html>	