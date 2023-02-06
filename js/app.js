// deno-lint-ignore-file
// import { name, draw, reportArea, reportPerimeter } from "../JSModules/square.js";

const greeting = "Hello ";
const name1 = "Paperbackdreams";

/**
var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is: " + petDog);
console.log("My pet cat's name is: " + petCat);
var catSound = "purr";
var dogSound = "woof";
console.log(petCat + "says" + catSound);
console.log(petDog + "says" + dogSound);
catSound = "meow";
console.log(petCat + "now says" + catSound);

console.log(petCat + petDog);

 */



/**
var number = 10;
if (number >= 65) {
	console.log('You get your income from your pension');
} else if (number < 65 && number >= 18) {
	console.log('Each month you get a salary');
} else if (number <= 18) {
	console.log('You get an allowance');
} else {
	console.log('The value of the age variable is not numberical');
}

*/

/**
function showMedals(n) {
	for (let i = 1; i <= n; i++) {
		if (i === 1) {
			console.log('Gold Medal');
		} else if (i === 2) {
			console.log('Silver Medal');
		} else if (i === 3) {
			console.log('Bronze Medal');
		} else {
			console.log(i);
		}
	}
}
showMedals(5);
*/

/**
function letterFinder(word, match) {
	for (let i = 0; i <= word.length; i++) {
		if (word[i] === match) {
			console.log('Found the', match, 'at', i);
		} else {
			console.log('---No match found at', i);
		}
	}
}
letterFinder('test', 't');
 */
/**
let clothes = [];
clothes.push('trousers', 'jacket', 'pants', 'shoes', 'socks');
clothes.pop(clothes[4]);
clothes.push('cloves');
let favCar = {};
favCar.color = 'blue';
favCar.covertible = true;
console.log(favCar);
console.log(clothes);

*/



/**
function addTwoNums(a, b) {
	try {
		if (typeof (a) != 'number') {
			throw new ReferenceError('the first argument is not a number');
		} else if (typeof (b) != 'number') {
			throw new ReferenceError('the second argument is not a number');
		} else {
			console.log(a + b);
		}
	} catch (error) {
		console.log("Error", error);
	}
}
addTwoNums(5, 6);

 */

/**
function letterFinder(word, match) {
	let condition1 = typeof (word) == 'string' && word.length >= 2;
	let condition2 = typeof (match) == 'string' && match.length == 1;
	if (condition1 && condition2) { //if both condition matches
		for (var i = 0; i < word.length; i++) {
			if (word[i] == match) {
				//check if the character at this i position in the word is equal to the match
				console.log('Found the', match, 'at', i);
			} else {
				console.log('---No match found at', i);
			}
		}
	} else {
		//if the requirements don't match
		console.log("Please pass correct arguments to the function");
	}
}
letterFinder([], []);
letterFinder("cat", "c");
 */

/**
let counter = 3;
function exmaple() {
	console.log(counter);
	counter = counter - 1;
	if (counter === 0) return;
	exmaple();
}
exmaple();

class Train {
	constructor(color, lightsOn) {
		this.color = color;
		this.lightsOn = lightsOn;
	}
	toggleLights() {
		this.lightsOn = !this.lightsOn;
	}
	lightsStatus() {
		console.log('Lights on?', this.lightsOn);
	}
	getSelf() {
		console.log(this);
	}
	getPrototype() {
		var proto = Object.getPrototypeOf(this);
	}
}

class HighSpeedTrain extends Train {
	constructor(passengers, highSpeedOn, color, lightsOn) {
		super(color, lightsOn);
		this.passengers = passengers;
		this.highSpeedOn = highSpeedOn;
	}
	toggleHighSpeed() {
		this.highSpeedOn = !this.highSpeedOn;
		console.log('High speed status:', this.highSpeedOn);
	}
	toggleLights() {
		super.toggleLights();
		super.lightsStatus();
		console.log('Lights are 100% operational.');
	}
}
let myFirstTrain = new Train('red', false);
console.log(myFirstTrain);
myFirstTrain.toggleLights();
myFirstTrain.lightsStatus();
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);
var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
 */

/** Calculate Temperature
// this is kelvin
const kelvin = 293;
// this is celsius
let celsius = kelvin - 273;
// this fahrenhheit
let fahrenheit = celsius * (9 / 5) + 32;
// this fahrenhheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

 */

/** Calculate Age
const myAge = 24;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
const myName = "Bao Le".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} years old in dog years`);

*/

/** Case Switch
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
	case 'first place':
		console.log('You get the gold medal!');
		break;
	case 'second place':
		console.log('You get the silver medal!');
		break;
	case 'third place':
		console.log('You get the bronze medal!');
		break;
	default:
		console.log('No medal awarded.');
		break;
}

*/

/** Magic Eight Ball
let userName = '';
userName !== '' ? console.log(`Hello, ${userName}`) : console.log('Hello!');
let userQuestion = '';
console.log(`${userQuestion} by ${userName}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
	case 0:
		eightBall = 'It is certain';
		console.log(eightBall);
		break;
	case 1:
		eightBall = 'It is decidedly so';
		console.log(eightBall);
		break;
	case 2:
		eightBall = 'Reply hazy try again';
		console.log(eightBall);
		break;
	case 3:
		eightBall = 'Cannot predict now';
		console.log(eightBall);
		break;
	case 4:
		eightBall = 'Do not count on it';
		console.log(eightBall);
		break;
	case 5:
		eightBall = 'My sources say no';
		console.log(eightBall);
		break;
	case 6:
		eightBall = 'Outlook not so good';
		console.log(eightBall);
		break;
	case 7:
		eightBall = 'Signs point to yes';
		console.log(eightBall);
		break;
	default:
		eightBall = 'Nothing';
		console.log(eightBall);
		break;
}
*/

/** Race Day
let raceNumber = Math.floor(Math.random() * 1000);
let isRegigteredEarly = false;
let runnderAge = 18;
if (runnderAge > 18 && isRegigteredEarly) {
	raceNumber += 1000;
	console.log(`You will race at 9:30am and your race number is ${raceNumber}`);
} else if (runnderAge > 18 && !isRegigteredEarly) {
	console.log(`You will race at 11:00am and your race number is ${raceNumber}`);
} else if (runnderAge < 18) {
	console.log(`You will race at 12:30pm and your race number is ${raceNumber}`);
} else {
	console.log('you should see the registration desk.');
}

*/

/** Functions
function getReminder() {
	console.log('Water the plants.');
}
function greetInSpanish() {
	console.log('Buenas tardes.');
}
function sayThanks(name) {
	console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();
sayThanks();
sayThanks();

function monitorCount(rows, columns) {
	return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);
function costOfMonitors(rows, columns) {
	return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

const plantNeedsWater = function (day) {
	if (day === 'Wednesday') {
		return true;
	} else {
		return false;
	}
};
console.log(plantNeedsWater('Tuesday'));
*/

/** Design an OO program */
/*
class Animal {
	constructor(color = 'yellow', energy = 100) {
		this.color = color;
		this.energy = energy;
	}
	isActive() {
		if (this.energy > 0) {
			this.energy -= 20;
			console.log(this.energy);
		} else if (this.energy == 0) {
			this.sleep();
		}
	}
	sleep() {
		this.energy += 20;
		console.log('Energy is increasing, currently at:', this.energy);
	}
	getColor() {
		console.log(this.color);
	}
}
class Cat extends Animal {
	constructor(sound = 'meow', canJumpHigh = true, canClimbTrees = true, color, energy) {
		super(color, energy);
		this.sound = sound;
		this.canJumpHigh = canJumpHigh;
		this.canClimbTrees = canClimbTrees;
	}
	makeSound() {
		console.log(this.sound);
	}
}
class Bird extends Animal {
	constructor(sound = 'kucku', canFly = true, color, energy) {
		super(color, energy);
		this.sound = sound;
		this.canFly = canFly;
	}
	makeSound() {
		console.log(this.sound);
	}
}
class HouseCat extends Cat {
	constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
		super(sound, canJumpHigh, canClimbTrees, color, energy);
		this.houseCatSound = houseCatSound;
	}
	makeSound(option) {
		if (option) {
			super.makeSound();
		}
		console.log(this.houseCatSound);
	}
}
class Tiger extends Cat {
	constructor(tigerSound = 'Roar', sound, canJumpHigh, canClimbTrees, color, energy) {
		super(sound, canJumpHigh, canClimbTrees, color, energy);
		this.tigerSound = tigerSound;
	}
	makeSound(option) {
		if (option) {
			super.makeSound();
		}
		console.log(this.tigerSound);
	}
}

class Parrot extends Bird {
	constructor(canTalk = false, sound, canFly, color, energy) {
		super(sound, canFly, color, energy);
		this.canTalk = canTalk;
	}
	makeSound(option) {
		if (option) {
			super.makeSound();
		}
		if (this.canTalk) {
			console.log("I'm a talking parrot!");
		}
	}
}
polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!
*/


/**
//  Building an object-oriented program
class Person {
	constructor(name = 'Tom', age = 20, energy = 100) {
		this.name = name;
		this.age = age;
		this.energy = energy;
	}
	sleep() {
		this.energy += 10;
	}
	doSomethingFun() {
		this.energy -= 10;
	}
}
class Worker extends Person {
	constructor(name, age, energy, xp = 0, hourlyWage = 10) {
		super(name, age, energy);
		this.xp = xp;
		this.hourlyWage = hourlyWage;
	}
	goToWork() {
		this.xp += 10;
	}
}

function intern() {
	var intern = new Worker("Bob", 21, 110, 0, 10);
	intern.goToWork();
	return intern;
}

function manager() {
	var manager = new Worker("Alice", 30, 120, 100, 30);
	manager.doSomethingFun();
	return manager;
}
 */

// De-structuring arrays and objects
// loop over any object's own property keys and values.
/** 
function testBracketsDynamicAccess() {
	var dynamicKey;
	if (Math.random() > 0.5) {
		dynamicKey = "speed";
	} else {
		dynamicKey = "color";
	}

	var drone = {
		speed: 15,
		color: "orange"
	};

	console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
*/

/**  Array and object iteration 
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
const logDairy = (dairy) => {
	for (item of dairy) {
		console.log(item);
	}
};
logDairy(dairy);
const animal = {

	canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
const birdCan = (object) => {
	for (key of Object.keys(object)) {
		console.log(`${key}: ${object[key]}`);
	}
};
birdCan(bird);

function animalCan(object) {
	for (prop in object) {
		console.log(`${prop}: ${object[prop]}`);
	}
}

animalCan(bird);
*/

/** The ForEach Method 
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
	console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

*/

// Exercise: Web page content update
/**
let answer = prompt('What is your name?');
if (typeof (answer) === 'string') {
	var h1 = document.createElement('h1');
	h1.innerText = answer;
	document.body.innerText = '';
	document.body.appendChild(h1);
}
var h1 = document.createElement('h1');
h1.innerText = "Type into the input to make this text change";

var input = document.createElement('input');
input.setAttribute('type', 'text');

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function () {
	h1.innerText = input.value;
});
 */

// Exercise: Capture Data
/** 
const h1 = document.querySelector('h1');
let arr = [
	'Example Domain',
	'First Click',
	'Second Click',
	'Third Click'
];
const handleClicks = () => {
	switch (h1.innerText) {
		case arr[0]:
			h1.innerText = arr[1];
			break;
		case arr[1]:
			h1.innerText = arr[2];
			break;
		case arr[2]:
			h1.innerText = arr[3];
			break;
		default:
			h1.innerText = arr[1];
			break;
	}
};
h1.addEventListener('click', handleClicks);
 */

// const jsonStr = '{"name": "Bao Le", "age": 24}';
// JSON.parse(jsonStr);

// Little Lemon receipt maker exercise
/**  
 * You will need to write a function declaration which will be able to do two things:

		If the function is called with the argument true, it will output the names of the dishes and calculate their final price (including 20% tax)

		If the function is called with the argument false, it will output the names of the dishes and give their prices without the additional tax

The expected outcome is that all the dishes' names and prices will be shown in the console output.

The text below shows the output that your code should produce:

Prices with 20% tax:
Dish: Italian pasta Price (incl.tax): $ 11.46
Dish: Rice with veggies Price (incl.tax): $ 10.38
Dish: Chicken with potatoes Price (incl.tax): $ 18.66
Dish: Vegetarian Pizza Price (incl.tax): $ 7.74

Prices without tax:
Dish: Italian pasta Price (incl.tax): $ 9.55
Dish: Rice with veggies Price (incl.tax): $ 8.65
Dish: Chicken with potatoes Price (incl.tax): $ 15.55
Dish: Vegetarian Pizza Price (incl.tax): $ 6.45
 * 
*/


// Given variables
const dishData = [
	{
		name: "Italian pasta",
		price: 9.55
	},
	{
		name: "Rice with veggies",
		price: 8.65
	},
	{
		name: "Chicken with potatoes",
		price: 15.55
	},
	{
		name: "Vegetarian Pizza",
		price: 6.45
	},
];
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
	for (d of dishData) { // don't use in // use let d of dishData
		var finalPrice;
		if (taxBoolean == true) {
			finalPrice = tax * d.price;
		}
		else if (taxBoolean == false) {
			finalPrice = d.price;
		}
		else {
			console.log("You need to pass a boolean to the getPrices call!");
			break;
		}
		console.log("Dish:", d.name, "Price: $" + finalPrice);
		// console.log(`Dish: ${d.name} Price: ${finalPrice}`);
	}
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
	getPrices(taxBoolean);
	var condition = typeof (guests) == 'number' && guests > 0 && guests < 30;
	if (condition == true) {
		var discount = 0;
		if (guests < 5) {
			discount = 5;
		}
		else if (guests >= 5) {
			discount = 10;
		}
		console.log('Discount is: $' + discount);
	}
	else {
		console.log('The second argument must be a number between 0 and 30');

	}
}

// Call getDiscount()

getDiscount(true, 2);
getDiscount(false, 10);