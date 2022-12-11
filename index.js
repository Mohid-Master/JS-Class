// console.log("hello world");
// alert("one");
// alert("two");

// String Data Type; any character !@#%123avsds

var myName = "*Junaid Aziz!"; // declaration + assignment
var age = '30';
var fatherName = "A Aziz";
var qualification = "BSCS(Software Eng)";
var passOutYear = "2013";
var universityName = "Federal Urdu University";


// console.log("Name: ", myName);
// console.log("Age: ", age);
// console.log("Father Name: ", fatherName);
// console.log("Qualification: ", qualification);
// console.log("PassOut Year: ", passOutYear);
// console.log("University: ", universityName);


var age; //declaration
age = 30; // assignment

// console.log(age);
// console.log("response ", myName);


var name = "Junaid";

// alert(universityName); //function 


// var remember;


// console.log(remember); // undefined


// remember = "today i have to take class for JS";

// console.log(remember);



// Number as Datatype

// var hour = 2; // Number
// console.log(typeof hour);
// var result = age + hour; //concatenation / join 250 Number(age) -> number

// console.log(result); // 302
// console.log(typeof result); // string


// var a = 10;
// var b = 20;
// var c = b-a;
// console.log('value of c =', c);

// Age Calc;

// prompt to take user input

// var yourAge = Number(prompt("Enter Your Age"));
// var currentYear = 2022;
// var yourDOBYear = currentYear - yourAge;
// console.log(yourDOBYear); // birthyear

//post increament
//pre increament 




var i = 10; // i =10;
--i; // 9;
--i; // 8
i++; // 9
i++; // 10
--i; // 9

// console.log(i);


// console.log("today class");

// fareihight to celcius
// celcius to fareihight
// v = s/t . 200km / 1h 
// s = v*t 


var product = (3 + 1) * 4; //BDMAS

// console.log('product', product);

// var profile = ""

// var c = prompt("tell me celcius temperature!", 0);
// var f = ((9/5)*c)+32;
// console.log(f);

// var res = prompt("sir aaj class hogi?");
// if(false){
//     console.log('yes aaj class hogi')
// }

// Boolean -> true / false;

// 70-79 -> 'A';
// 60-69 -> 'B';
// 50-59 -> 'C';
// < 35  -> 'F';

// if(){}
// if{}else{}
// else if
//else

// switch


// var guess = Math.floor(Math.random() * 10);
// var userInp = +prompt('guess any number?', 0);
// console.log("guess", guess);
// if(userInp == guess){
//     console.log(`Congratulation! you won!`);
// }else{
//     console.log(`You lose`);
// }

// user give input as percentage
// 80

var userInput = +prompt('Input your percentage');
var gender = prompt('mention your gender, press f for femal and m for male');
 
if(userInput == 0){
    console.log('invalid number');
}else if(userInput >= 60 && userInput < 70){
    console.log('B');
}else if(userInput >= 70 && userInput < 80){
    console.log('A');
}else if(userInput >= 80 && userInput < 90){
    console.log('A+')
} else if(userInput > 0 && userInput <= 35){
    console.log('fail');
}else{
    console.log('you entered exceeded number')
}













