function Food () {

	
}

Food.prototype.juice = function() {
	console.log("juicing!");
};

function Fruit(fruit) {
	this.name = fruit;
	
}

Fruit.prototype = Object.create(Food.prototype);
Fruit.prototype.sayName = function() {
	console.log(this.name);
}

function Apple(appleType) {
	hasSkin = true;
	Fruit.apply(this, [appleType]);
}

Apple.prototype = Object.create(Fruit.prototype);

Apple.prototype.peel = function() {
	this.hasSkin = false;
	let name = this.name;
	console.log(`Your ${name} apple is now peeled!`);
}

function Vegetable() {
	this.wash = function(){ console.log('Washing!!!')};
	Food.apply(this);
}

Vegetable.prototype = Object.create(Food.prototype);

function Carrot() {
	Vegetable.apply(this);
}

Carrot.prototype = Object.create(Vegetable.prototype);

var redApple = new Apple('red');
var yellowApple = new Apple('yellow');
var carrot = new Carrot();

redApple.peel();
yellowApple.peel();
redApple.juice();
yellowApple.juice();
carrot.wash();
carrot.juice();
