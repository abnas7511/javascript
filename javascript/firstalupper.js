//storing input by the user into a variable name using prompt
var name = prompt("what is your name?");

//finding first letter using slice
var firstal = name.slice(0,1);

//making it toUpperCase
var firstalupper = firstal.toUpperCase();

//finding the rest char of name

var rest = name.slice(1,name.length);

//making rest into lowercase

var restlower = rest.toLowerCase();

var uppercasedname = firstalupper+restlower;

alert("Hello "+uppercasedname);

/*

another way

name = name.slice(0,1).toUpperCase()+name.slice(1,name.length);
alert("Hello "+name);

*/