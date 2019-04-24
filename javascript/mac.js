//------------ Variable Declaration --------------------------------------------

// var [variable name] = [data type];


// var cups = 9;

// var cups2 = "9";


// console.log("Hello World")



// ------------- If Else Statements --------------------------------------------

// if(cups < 3) {
// 	console.log("has not drank 3 cups");
// }



// var best = "Sara Lee";
// var okay = "Mrs. Bairds";
// var worst = "Wonderbread";

// var blakeChoice = best;

// if (blakeChoice === best){
// 	console.log("You'v got Shaz's favorite bread! :)");
// 	}
// 	else if (blakeChoice === okay){
// 		console.log("Budget Bread! Runner up bread!!");
// 	}
// 	else{
// 		console.log("Just go home...");
// 	}

// var comp1 = "Macbook";
// var comp2 = "Windows";
// var comp3 = "Linux";

// var choice = comp1

// if (choice === comp1){
// 	console.log("You have money!!");
// }
// else if (choice === comp2){
// 	console.log("You have money but enjoy keeping some in your pocket.")
// }
// else {
// 	console.log("Oh your iq level is over 9000.")
// }



// var x = 15;
// if (x < 15){
// 	console.log("wumbo");
// } else{
// 	console.log("hoopla");
// }

//----------------------Create random number --------------------------------------------
// var x = Math.floor(Math.random()*10);

// console.log("your random number is " + x);


// var bread = Math.floor(Math.random()*10);

// if (bread <= 3){
// 	console.log("The store only has Wonderbread...");
// } else if (bread > 3 && bread <=6) {
// 	console.log("Atleast they got Mrs. Bairds.");
// } else {
// 	console.log("Get the good stuff.");}

//--------------- Prompts -----------------------------------------------

// var user_answer = prompt("Blake is headed to Wegman's, What is your favorite color?");

// console.log("Cool color. Mine is " + user_answer + " too!!");
// console.log('Cool color. Mine is ${user_answer}');

//-----------Challenge 1 ------------------------------------------------

// var user_cups = prompt("How many cups of coffee have you had today?");

// if (user_cups <== 3){
// 	console.log("Here have another cup on us.");
// } else {
// 	console.log("Woah woah woah I think you've had enough this morning.");
// }

//---------- Challenge 2 ------------------------------------------------

// var tempt = 80;
// var precip = "raining";
// var indoor = true
// console.log("The temperature is " + tempt + " degrees.");
// if (tempt >= 80){ console.log("Time to swim!");
// }
// if (indoor === true) {
// 	console.log("Time to swim.");
// }
// else if (tempt >= 80 && precip != "raining" ){
// 	console.log("Time to swim.");
// }

// if ((tempt >= 80 && precip != "raining") || indoor === true){
// 	console.log("Time to swimmm");
// }

//------------- Iterations ------------------------------------

// for(var x = 1; x <= 10; x++){
// 	console.log(x + 1);
// }

// var beer = 99;
// if ( beer <= 99){
// 	for(beer <= 99; beer--){
// 		console.log(beer -1);
// 	}
// }
//------------- For Loops --------------------------------------
// for (var beer = 99; beer <= 99; beer--)
// {
// 	if(beer === 0)
// 		{
// 			console.log("WE NEED MORE BEER!!!");
// 			break;
// 		}
// 	console.log(beer + " bottles of beer on the wall.");
// } 

// var correctAnswer = prompt("Do you want to build a snowman?");

// while(correctAnswer != "yes")
// 	{
// 		var correctAnswer = prompt("Do you want to build a snowman?");
// 	}
// if (correctAnswer == "yes");
// 	{
// 		console.log("YAY LETS GO OUT SIDE AND BUILD ONE!!");
// 	}
//------------- Switch Statements --------------------------------------

// var x = prompt("Choose option 1, option")
// switch(x)
// {
// 	case 3:
// 		console.log("three");
// 		break;
// 	case 2:
// 		console.log("two");
// 		break;
// 	case 1:
// 		console.log("one");
// 		break;
// 	default:
// 		console.log("default");
// 		break;
// }
// var playerChoice = Math.floor(Math.random()*3)
// ------------- ROCK PAPER SCISSORS GAME!!! ---------------------------------------

// alert("Welcome to Rock, Paper, Scissors.")
// var computerChoice = Math.floor(Math.random()*3)

// var playerChoice = prompt("Choose: 0 for Rock, 	1 for Paper, 2 for Scissors");
// if (computerChoice == 0 )
// 	{
// 		computerChoice = "rock";	
// 	}
// 	else if(computerChoice == 1)
// 	{
// 		computerChoice = "paper";
// 	}
// 	else
// 	{
// 		computerChoice = "scissors";
// 	}

// if (playerChoice == 0 )
// 	{
// 		playerChoice = "rock";	
// 	}
// 	else if(playerChoice == 1)
// 	{
// 		playerChoice = "paper";
// 	}
// 	else
// 	{
// 		playerChoice = "scissors";
// 	}
// var 

// var compare = function(a,b)
// {
//  if (a === b)
//  {
//  	console.log("its a tie");
//  }
//  else if((a == "rock" && b == "scissors") || (a == "paper" && b == "rock") || (a == "scissors" && b =="paper"))
//  {
//  	console.log("computer wins");
//  }
//  else if((a == "rock" && b == "scissors") || (a == "paper" && b == "rock") || (a == "scissors" && b =="paper"))
//  {
//  	console.log("player wins");
//  }
// }


// console.log("Computer's choice: " + computerChoice);
// console.log("Player's choice: " + playerChoice);
// compare(computerChoice,playerChoice);

//------------- Arrays ------------------------------------------------------------------
// var teachers = ['Shane', 'Zack'];
// console.log(teachers[0]) //'Shane'
// teachers.length;  //2

// //---.push and .pop
// var teachers = ['Assaf', 'Shane'];
// teachers.push('Zack'); //['Assaf', 'Shane', 'Zack']
// var teacher1 = teachers.pop(); //teacher1 == 'Zack', teachers == ['Assaf', 'Shane']

// var teachers = ['Assaf', 'Shane'];
// teachers.unshift('Zack'); // ['Zack', Assaf', 'Shane']
// var teacher = teachers.shift(); //teacher == 'Zack', teachers = ['Assaf', Shane']
// COPY
// //---Arbitrary Adding
// Finding an item
// teachers[4] = 'James Taylor'; // ['Assaf', 'Shane', 'Zack', undefined, 'James Taylor'];
// teachers[4] = 'Billy Joel'; // ['Assaf', 'Shane', 'Zack', undefined, 'Billy Joel'];
// var a = [10,11,20];
// a.indexOf(11); //1
// a.indexOf(50); //-1
// You can also predefine the index in where you want to add or edit an item.

// //---Slicing and Splicing 
// slice() needs to accept two arguments, start and end and returns a new array.This new array will hold the elements from the given start index up the one right before the specified end index.

// splice() is a mutating function, that takes at least 2 arguments. This function tells us where to start , how many items to remove from the starting point, and then what to replace it with. 

// var a = [1,2,3,4];

// //----Slice - doesn't mutate array, slice(start,end)
// a.slice(0,2); //[1,2]
// 'abcd'.slice(1,3) // 'bc'

// //----Splice - splice(start,numToRemove,...items to add) - this does mutate
// a.splice(1,2,'a','b'); //a is [1,'a','b',4]

//---Iterating Over an Array
// var teachers = ['shane', "rock", "Patricia", "CL", "Junior"];

// for(var x = 0; teachers.length > x; x++){
// 	console.log(teachers[x]);
// }


// //1.
//  var shoppingList = ['pop tarts','ramen noodles','chips','salsa','coffee'];
// console.log(shoppingList);

// //2.
// shoppingList.push('fruit loops');
// console.log(shoppingList);

// //3.
// shoppingList[4] = 'fair trade coffee';
// console.log(shoppingList);

// //4.
// shoppingList[2] = 'rice';
// shoppingList[3] = 'beans';
// console.log(shoppingList);

// //.5
// var shoppingCart = [];

// //6.
// shoppingCart.push(shoppingList.pop());
// console.log(shoppingList);
// console.log(shoppingCart);
// //7.
// shoppingCart.push(shoppingList.shift());
// console.log(shoppingList);
// console.log(shoppingCart);

// //8.

//  while(shoppingList.length > 0){
//  	shoppingCart.push(shoppingList.pop());
//  	console.log(shoppingCart);
//  }

// //9.
// 	shoppingCart.reverse(shoppingCart.sort()); //or shoppingCart.sort().reverse();
// 	console.log(shoppingCart);
// //10.
// 	var ouputString = " ";
// 	for (var i = 0; shoppingCart.length > i; i++) {
// 		outputString += shoppingCart[i] + " , ";
// 	}
// 	console.log(outputString);

// 	var outputString2 = shoppingCart.join(" ,");
// 	console.log(outputString2);

//--------------------- Objects -----------------------------

// var name_of_object = {
// 	key: value,
// 	key: value,
// 	key: value,
// }

// var dog = {
// 	name: "Leo",
// 	health: 100,
// 	stamina: 90,
// 	hunger: 5,
// 	thirst: 10,
// 	coat: "black",
// 	owner: {
// 		name: "Shaz",
// 		age: 32,
// 		location: "Mckinney",
// 		profession: "Chipotle",
// 		vet: {
// 			name: "Carter",
// 			contact: "1-800-VET",
// 			clinic: "Petco",
// 			profession: "Lead vet",
// 			specialization: "Dogs",
// 		},
// 	},
// 	siblings: ['Lucy', 'Winter', 'Larry', 'Bear'],
// }


// console.log(dog.siblings[2]);
// console.log((dog.siblings[2]),(dog.owner.name))

// console.log(dog.owner.vet.clinic)
// console.log(dog);
// delete dog.hunger;
// dog.starving = 8;

// console.log(dog);
// console.log(dog.starving);

// ------------------ Exercise 2 Addressing Objects -----------------------------------
var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}
	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};
//---------- Makes the objects in the student array read in integer form then sorts through for a specific key ---------------------------
var sortOSX = [];

for (var i = 0; i < course.students.length; i++)
{
	if (course.students[i].computer.OS === "OSX") {
		sortOSX.push(course.students[i].name);
	}
}
console.log(sortOSX);


// 1.
	console.log(course.name);
// 2.
	console.log(course.teachers[1]);
// 3.
	console.log(course.students[0].name);
// 4.
	console.log(course.students[1].computer.type);
// 5.
	console.log(course.preReqs.equipment);
// 6.
	console.log(course.preReqs.equipment.OSOptions[1]);
// 7.
	console.log("'" + (course.preReqs.equipment.OSOptions[0]) + " or " + (course.preReqs.equipment.OSOptions[1]) + "'");
// 8.
	// console.log([course.students[1].name,course.students[2].name]);
	// console.log([course.students[1],course.students[2]]);
	// console.log(course.students);
	console.log(sortOSX);













