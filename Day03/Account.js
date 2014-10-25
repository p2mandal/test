//create Account.js and convert this Java class to JS class
function Account(theBalance){
	var balance = theBalance;
	this.getBalance = function(){
		return balance;
	};
	this.deposit = function(amount){
		balance += amount;
	};
	this.withdraw = function(amount){
		balance -= amount;
	};
}
var acc1 = new Account(1000);
acc1.deposit(1000);
acc1.withdraw(200);
console.log("Balance: " + acc1.getBalance());

/*
public class Account{
	private double balance;
	public Account(double balance){
		this.balance = balance;
	}
	public void deposit(double amount){
		balance += amount;
	}
	public void withdraw(double amount){
		balance -= amount;
	}
	public double getBalance(){
		return balance;
	}
}
Account acc1 = new Account(1000);
acc1.deposit(1000);
acc1.withdraw(200);
System.out.println("Balance: " + acc1.getBalance();)
*/