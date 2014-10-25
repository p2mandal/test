var target = Math.round(Math.random()*100);
var attempts = 0;
var message = "";
var gameHistory = [];
var gameOver = false;

function play(guess){
	attempts++;
	gameHistory[attempts] = guess;
	if(guess > target)
		message = "Aim Lower";
	else if(guess < target)
		message = "Aim Higher";
	else{
		message = "You've got it!!!";
		gameOver = true;
	}		
}

