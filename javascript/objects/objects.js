// ------------------------------ Exercise 1 Addressing Objects ----------------------------------
//1.
 var shoppingList = ['pop tarts','ramen noodles','chips','salsa','coffee'];
console.log(shoppingList);

//2.
shoppingList.push('fruit loops');
console.log(shoppingList);

//3.
shoppingList[4] = 'fair trade coffee';
console.log(shoppingList);

//4.
shoppingList[2] = 'rice';
shoppingList[3] = 'beans';
console.log(shoppingList);

//.5
var shoppingCart = [];

//6.
shoppingCart.push(shoppingList.pop());
console.log(shoppingList);
console.log(shoppingCart);
//7.
shoppingCart.push(shoppingList.shift());
console.log(shoppingList);
console.log(shoppingCart);

//8.

 while(shoppingList.length > 0){
 	shoppingCart.push(shoppingList.pop());
 	console.log(shoppingCart);
 }

//9.
	shoppingCart.reverse(shoppingCart.sort()); //or shoppingCart.sort().reverse();
	console.log(shoppingCart);
//10.
	var ouputString = " ";
	for (var i = 0; shoppingCart.length > i; i++) {
		outputString += shoppingCart[i] + " , ";
	}
	console.log(outputString);

	var outputString2 = shoppingCart.join(" ,");
	console.log(outputString2);








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
















