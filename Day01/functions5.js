function maths(tellMeWhatToDo){
	var a = 50;
	var b = 30;
	console.log(tellMeWhatToDo);
	tellMeWhatToDo(a,b);
}
maths(function(n1,n2){console.log(n1+n2)});
maths(function(n1,n2){console.log(n1>n2);})


/*
function add(a,b){
	console.log(a+b);
}
function subtract(a,b){
	console.log(a-b);
}
add(30,50);
subtract(30,50);
*/

/*
function maths(behavior){
	var num1 = 30;
	var num2 = 50;
	behavior(num1,num2);
}

var add = function(a,b){console.log(a+b);}
var subtract = function(a,b){console.log(a-b);}

maths(add);
maths(subtract);

*/