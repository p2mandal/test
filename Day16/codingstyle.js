var numbers = [12,324,456,6,7,78,56,83,2,77];

//Print the sum of all numbers in the array

//Imperative style
var sum = 0;
for(var i=0;i<numbers.length;i++){
	sum += numbers[i];
}
console.log("Imperative style (Sum): " + sum);

//Functional style
var total = numbers.reduce(function(prevValue,currentValue){ 
	return prevValue+currentValue;
})
console.log("Functional style (Sum): " + total);

//Generate an array of even numbers by looping through the numbers array

//Imperative style
var evenNumbers = [];
for(var i=0;i<numbers.length;i++){
	if(numbers[i] % 2 == 0)
		evenNumbers.push(numbers[i]);
}
console.log("Imperative style (Even numbers): " + evenNumbers);

//Functional style
var evenNos = numbers.filter(function(num){ return num % 2 == 0});
console.log("Functional style (Even numbers): " + evenNos);

//Print the sum of all odd numbers in the array

//Imperative style
var sumOfOddNumbers = 0;
for(var i=0;i<numbers.length;i++){
	if(numbers[i] % 2 != 0)
		sumOfOddNumbers += numbers[i];
}
console.log("Imperative style (Sum of odd numbers):" + sumOfOddNumbers);

//Functional style
var sumOfOddNos = 0;
sumOfOddNos = numbers.filter(function(num){return num%2 != 0})
					 .reduce(function(prevValue,currentValue){
					 	return prevValue+currentValue
					 });
console.log("Functional style (Sum of odd numbers):" + sumOfOddNos);


//Find the largest number in the array 

//Functional style
var largest = numbers.reduce(function(prevValue,currentValue){
	return prevValue > currentValue?prevValue:currentValue;
});
console.log("Largest: " + largest);

//Print each number along with it's index

//Functional style
numbers.forEach(function(num,index){ 
	console.log(index + ":" + num)
});


/*Create a file codingstyle.js.

Have an array of 10 numbers.

Implement the following.

1) Print the sum of all numbers in the array
2) Generate an array of even numbers by looping through the numbers array
3) Print the sum of all odd numbers in the array
4) Find the largest number in the array 
5) Print each number along with it's index as

0 : 99
1 : 250
2 : 321

Run codingstyle.js using NodeJS. We'll discuss the style of coding using these examples.
*/