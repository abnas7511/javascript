/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    putBeeper();
    acrossdiagonal();
    left3();
    acrossdiagonal();
    left3();
    acrossdiagonal();
    left3();
    acrossdiagonal();
    left3();
  }

  //function to move in half square way and put a beeper named as across diagonal//
   function acrossdiagonal(){
    move();
    turnLeft();
    move();
    putBeeper(); 
     }
 //function to rotate in desired direction named as left3
   function left3(){
     turnLeft();
     turnLeft();
     turnLeft();
  }

  /* other way of doing it in simple way is to combine left3 with acrossdiagonal function

  function main(){
  putBeeper();
  acrossdiagonal();
  acrossdiagonal();
  acrossdiagonal();
  acrossdiagonal();
}
 
 function acrossdiagonal(){
  move();
  turnLeft();
  move();
  putBeeper(); 
  turnLeft();
  turnLeft();
  turnLeft();
   }
   
   */