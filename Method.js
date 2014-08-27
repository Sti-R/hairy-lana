
// this is a method that will change any object with an age, key. 
var setAge = function (newAge) {
	this.age = newAge;
}

var bob = {
	name:"Bob Snyder",
	age: 30
}

// here we define our method using "this" before we introduce Bob.
function setAge(newAge){
	this.age = newAge;
}

var bob = new Object();
	bob.age = 30;

bob.setAge = setAge;
bob.setAge(50)

//Understanding "this" Keyword

var person = {
	firstName: "Jason",
	lastName: "Sio"
};

function fullName(){
	console.log (this.firstName + this.lastName)
}
