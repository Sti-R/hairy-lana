var name = prompt("What's your name?").toLowerCase();
var user = prompt("How are you today?").toUpperCase();

var heterogenousArray = ["Jason", true, false, 7];
var twoDimensionalArray = [[1,1], [1,1]];

// 3 elements in the first array, and 2 elements in the second array.
var jaggedArray = [["Jason","Jill", "john"], [1,2]];


var people {
    Jason{
        name:'Jason',
        lastName:'sio',
        age:30
        address:['1425','liliha st','Honolulu', 'HI']
    },
    Bill{
        name:'Bill',
        lastName:'Sanders',
        age:23,
        address:[]
    }
}




var search = function(contact){

}





//object Constuctor
var object1 = new Object();

// This will add things into object1
object1.name = "jason";
object1.lastName = "sio";
object1.age = 30;



// This is an Object called, object literal notation
var myObject = {
    key:value,
    key:value
};

var me = {
    firstName: "Jason",
    lastName:"sio",
    age:30
};



// for loop
for (i = 0; i < list[3]; i++){
    //Your code here
};

//while loop
while (list[1]){
    console.log("Hey you")
    list[1]=false
};

switch (user){
    case 'I\'M GOOD.':
        var answer = prompt("Are you sure?").toUpperCase();
        if(answer === 'yes'){
            console.log("Ok");
        }else{
            console.log("I will not say anything");
        }
        break;
    case 'I DONT KNOW.':
        var doWhat = prompt("Well, what will you do?").toUpperCase();
        var goWhere = prompt("And where will you go?").toUpperCase();
            if (doWhat === 'SOMETHING' && goWhere ==='SOMEWHERE'){
                console.log("I hate to tell you this, but you suck.");
            }else{
                console.log("You need to type something else");
            }
        break;
    case 'FINE':
        var beating = prompt("Do you want a beating?").toLowerCase();
        var slap = prompt("Do you want a slap?").toLowerCase();
        if (beating === 'yes' && slap === 'yes'){
            console.log("I will beat and slap the shit out of you");
        }else if (beating === 'yes' || slap === 'no'){
            console.log("you said that you want a beating and you don't want a slap");
        }else if (beating === 'no' || slap === 'yes'){
            console.log("I will not give you a beating, but I will give you a slap");
        }else{
            console.log("I'm sorry, " + name + " I don't understand you");
        }
        break;
    case 'I\'M FEELING SICK.':
        console.log("What the hell? Go get some medicine.");
        break;
    default:
        console.log("I\'m sorry, I don\'t understand your answer.");
};
