//Implement a function 'generate' as shown below.
var generate = function(obj){
	var queryString = "";
	
	for(var key in obj){
		var value = obj[key];
		//check if it's an array by checking if push method is defined

		if(obj[key].push != undefined){
			var temp = "";
			for(var i=0;i<obj[key].length;i++){
				temp += obj[key][i] + "_";
			}
			temp = temp.substring(0,temp.length - 1);
			queryString += key + "=" + temp + "&";	
		}
		else 
			queryString += key + "=" + value + "&";
	}
	queryString = queryString.substring(0,queryString.length - 1);
	console.log(queryString);
}
generate({name:"Sam",age:12,hobbies:["TV","Music"]});
generate({title:"ABC",price:100,publisher:"Apress"});



//The output should be

//   name=Sam&age=12&hobbies=TV_Music
//   title=ABC&price=100&publisher=Apress