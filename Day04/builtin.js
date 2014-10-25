/* String, Number, Object,Date,Boolean,Array,Math */

//GLOBAL
var num = "34.134";
console.log(parseInt(num));
var s = "tired";
console.log(isNaN(s));

//Math
console.log(Math.random() * 100);

//Array
var arr = [];
arr.push(100);
arr.push(200);
arr.push(300);
arr.push(400);
arr.pop();
console.log(arr);
var value = arr.join("_");
console.log(value);

//Date
console.log(new Date());

//String
var str1 = "Breakfast";
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.substring(0,3));
console.log(str1.substring(1));
console.log(str1.indexOf("z"));// -1

var str2 = "Poha,Bread,Biscuits";
var arr = str2.split(",");
for(var i=0;i<arr.length;i++){
	console.log(arr[i]);
}