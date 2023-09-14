function beer() 
{
   var bottleword = "bottles";
   
   var count = 99;
   while(count<100){
      console.log(count +" "+bottleword+" of beer on the wall,"+ count +" "+bottleword+" of beer.Take one down and pass it around,"+ (count-1) + " " +bottleword+ " of beer on the wall.");
      count--;
      if(count===1){
         bottleword="bottle";
      }
      if (count=== 0)
      {
         console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
         break;
      }
   } 
}


beer();