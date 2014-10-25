function confuse(){
	return function(){console.log("Confused");}
}
var fn = confuse();
fn();

function inc(arg){
	arg++;
	return arg;
	//console.log(arg);
}
var a = inc(100);
console.log(a);

function doSomething(arg){
	arg();
}

var sleep = function(){
	console.log("Training");
}
doSomething(sleep);
//doSomething(sleep());

function mockTest(){
	console.log("Scratching my head");
}
doSomething(mockTest);
doSomething(function(){console.log("Please leave me")});




var i = 10;
var j = "string";
var b = false;

var eat = function(){
	console.log("Ahhhhhhhhhh");
};
eat();
