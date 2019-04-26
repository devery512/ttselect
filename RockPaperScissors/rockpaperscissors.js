// -----------------------New rock paper scissor game---------------------
var hands = ['rock','paper','scissors']
var computerChoice = gethand();
var playerChoiceRock = hands[0];
var playerChoicePaper = hands[1];
var playerChoiceScissors = hands[2];
// var plays = {
// 	playerHand: {
// 		rock: hands[0],
// 		paper: hands[1],
// 		scissors: hands[2],
// 	}
// }

//------ Functions --------------------
	function gethand(x)
			{
				var x = parseInt((Math.random()*3))
				if (x === 0 )
					{
						x = hands[0];
					}
				else if(x === 1)
					{
						x = hands[1];
					}
				else
					{
						x = hands[2];
					}
				return x;
			};

	function player(playerChoice){
		if (playerChoice == "rock" )
		{
			
			playerChoiceRock = hands[0];	
		}
		else if(playerChoice == "paper")
		{
			playerChoicePaper = hands[1];
		}
		else if (playerChoice == "scissors")
		{
			playerChoiceScissors = hands[2];
		}
		else
		{
			playerChoice = null;
		}

		console.log("Player's choice: " + playerChoice);
	};

	function compare(a,b)
	{
	if (a == b)
	 {
	 	alert("IT'S A TIE");
	 }
	 else if((a == "rock" && b == "scissors") || (a == "paper" && b == "rock") || (a == "scissors" && b =="paper"))
	 {
	 	alert("PLAYER WINS");
	 }
	 else if((b == "rock" && a == "scissors") || (b == "paper" && a == "rock") || (b == "scissors" && a =="paper"))
	 {
	 	alert("COMPUTER WINS");
	 }
	};

// console.log("Computer's choice: " + computerChoice);
// // player(playerChoice);
// compare(computerChoice,playerChoice);

//------------- Javascript to HTML -------------

document.getElementById("rock").onclick = function(){
	var cchoice = gethand(computerChoice);
	player(playerChoiceRock);
	console.log("Computer's Choice: "+ cchoice);
	compare(playerChoiceRock, cchoice);
};

document.getElementById("paper").onclick = function(){
	var cchoice = gethand(computerChoice);
	player(playerChoicePaper);
	console.log("Computer's Choice: "+ gethand(computerChoice));
	compare(playerChoicePaper, cchoice);
};
document.getElementById("scissors").onclick = function(){
	var cchoice = gethand(computerChoice);
	player(playerChoiceScissors);
	console.log("Computer's Choice: "+ gethand(computerChoice));
	compare(playerChoiceScissors,cchoice);
};

