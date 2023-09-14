var max1 = prompt("enter the max no of char");
var par=prompt("enter the paragrapgh");
alert("You have entered "+par.length+" characters and you have only "+(max1-par.length)+" left");
alert("the entered text is "+par.slice(0,max1));