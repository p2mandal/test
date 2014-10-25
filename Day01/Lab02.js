function max(){
	var largest = 0;
	for(var i=0;i<arguments.length;i++){          //arguments[] stores the arguments passed to the functions. It is an inbuilt array to store arguments. 
		if(arguments[i] > largest)
			largest = arguments[i];
	}
	console.log("Max: " + largest);
}
var k = 0;
var K = 0;

function add(){
	var sum = 0;
	for(var i=0;i<arguments.length;i++){
		sum += arguments[i];
	}
	console.log("Sum: " + sum);
}

add(10,1,89,62,12);
add(10,1,89,62,12,45,6,7,8,28,39,9,3);
add(3,4); 

max(10,1,89,62,12);//should print 89
max(10,1,49,62,12,45,6,7,8,28,39,9,3);//should print 62
max(3,4); //should print 4
