var arr1 = [1,2,3,4];
var arr2 = new Array(1,2,3,4);

var str1 = "Hello";
var str2 = new String("Hello");

//JSON
var acc2 = {
	balance : 1000,
	deposit : function(amount){
		this.balance += amount;
	},
	withdraw : function(amount){
		this.balance -= amount;
	}
};
var acc3 = {};
for(var key in acc2){
	//acc3[key] = acc2[key];
	console.log(key);
}

acc2.deposit(100);

var p2 = {
	name : "Sam",
	address : { street:"Baner"},
	age : 12,
	hobbies : ["Eat","Sleep"]
};
console.log(p2.name);
console.log(p2.address.street);


var p1 = new Object();
p1.name = "Sam";
p1.age = 12;
p1.hobbies = ["Eat","Sleep"];


var acc1 = new Object();
acc1.balance = 1000;
acc1.deposit = function(amount){
	this.balance += amount;
}
acc1.deposit(100);
console.log(acc1.balance);