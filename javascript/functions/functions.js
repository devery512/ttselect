//-------------------Excercise 1 ----------------------------

	var billAmount =  Number(prompt("How much was your bill?")); //Number() converts the prompt from a string into a number.

	function grandtotal(){
		//------Function that calculats the gratuity based on it being 20% --------
		function gratuity(){
			return billAmount * 0.2;
		}

		// ----Function that calculates the total with a percentage. -------------
		function totalWithGrat(x){
			var total = x + gratuity();
			return total;
		}
		// var newtotal = totalWithGrat(billAmount);
		console.log("Total gratuity is: $"+ gratuity(billAmount) +" Total with gratuity is: $" + totalWithGrat(billAmount).toFixed(2));
	}

	grandtotal(billAmount);

//-------------------Excercise 2 ----------------------------

// (Beats Scissors),paper(Beats Rock),scissors(Beats Paper)
var hands = ['rock','paper','scissors']
var playerone = "blah" //prompt("Please enter player one's name.");
var playertwo = "blahblah" //prompt("Please enter player two's name.");
var topFive = false;
//------Object for players--------------------
	var info =
		{
			player :[
						{name: playerone, hand: gethand(), score: {w:0}},
						{name: playertwo, hand: gethand(), score: {w:0}}
					],
		}

//-------Functions------------------------
	function gethand(x)
		{
			var x = parseInt((Math.random()*3))
			if (x == 0 )
				{
					x = hands[0];	
				}
			else if(x == 1)
				{
					x = hands[1];
				}
			else
				{
					x = hands[2];
				}
			return x;
		};

	function logging(x,y)
		{
			console.log(playerone + ": " + x);
			console.log(playertwo + ": " + y);

		}
	var player1 = info.player[0].hand;
	var player2 = info.player[1].hand;

	function playRound(play1,play2)
		{	var play1 = info.player[0].hand;
			var play2 = info.player[1].hand;
			if (play1 > play2) {
				console.log(playerone +" wins");
				player1.w++;
				
			}
			else if(play1 < play2){
				console.log(playertwo +" wins");
				player2.w++;
			}
			else if(play1 == play2){
				console.log("The players picked the same answer. It's a tie.");
				 player1.w + 0;
				 player2.w + 0;
			}
			else{
				console.log("null");
			}
			// console.log(player1);
			// console.log(player2);
		};


	logging(player1,player2);
	playRound();
	

	function playGame(){
		 var games = 0;
		 while(games < 6){
		 	playRound(playerone,playertwo);
		 	games++;
		 }
		// console.log(playerone,playertwo);
	}


playGame();



























