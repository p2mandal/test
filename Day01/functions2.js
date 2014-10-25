//Function hoisting
function work(){
	console.log("***TRYING HARD TO WORK***");
	//console.log(arguments);
	for(var i=0;i<arguments.length;i++){
		console.log(arguments[i]);
	}
}
work();
work(10,"hours");
work("hate to work");
work(false);
work(24,7,365,"days");
work("what the hell is going on?","hungry");

eat();
function eat(){
	console.log("Eating");
}
