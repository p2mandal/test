var Accenture = {
	ajax : function(obj){
		var url = obj.url;
		var callbackFunction = obj.callback;
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				var response = xhr.responseText;
				callbackFunction(response);
			}
		};
		xhr.open("GET",url);
		xhr.send();
	}
};