
var numbers = [];

for(var i=0;i<10;i++){
	numbers[i] = i + 1;
}
for(var i=0;i<numbers.length;i++){
	if(numbers[i] % 2 == 0)
		console.log(numbers[i]);
}
var sumOfOddNumbers = 0;
for(var i=0;i<numbers.length;i++){
	if(numbers[i] % 2 != 0)
		sumOfOddNumbers += numbers[i];
}
console.log("Sum of all odd numbers: " + sumOfOddNumbers);

var oddNumbers = [];
var index = 0;
for(var i=0;i<numbers.length;i++){
	if(numbers[i]%2 != 0){
		oddNumbers[index] = numbers[i];
		index++;
	}
}
console.log(oddNumbers);

