function Book(arg1,arg2){
	this.title = arg1;
	this.price = arg2;
	this.buy = function(seller){
		console.log("Buying " + this.title + " from " + seller);
	}
}
var b1 = new Book("AJAX",200);
console.log(b1.title + ", " + b1.price);
b1.buy("Amazon");

var b2 = new Book("HTML 5",299);
console.log(b2.title + ", " + b2.price);
b2.buy("Flipkart");