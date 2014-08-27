var myArray = ["Jason Sio", "loft01jp"];

var cutName = function(myName){
	return myName.split(' ');
};

var myData = {
    fullName: cutName(myArray[0]),
    skype: myArray[1],
    github: "Sti-R"
}
console.log(myData)