<html>
<head>
	<title>Online Check</title>
	<script>
		
		window.onload = init;
		
		function check(){
			var sec1 = document.getElementById("sec1");
			if(navigator.onLine)
				document.getElementById("sec1").innerHTML = "Bingo! You are Online";
				//sec1.style.backgroundColor = "green";
			else
				document.getElementById("sec1").innerHTML = "You are Not Connected";
				//sec1.style.backgroundColor = "red";
		}

		function init(){
			window.setInterval("check()", 1000);
		}

	</script>
</head>
<body>
	<section id= "sec1"></section>	


</body>
</html>