function whosPaying(names) 
{
    var noofpeople = names.length;
    var randompersonpos = Math.floor(Math.random() * noofpeople);
    var randomperson = names[randompersonpos];

   return randomperson + " is going to buy lunch today!" ;
}

names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

whosPaying(names);