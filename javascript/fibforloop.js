function fib(n) 
{
   var arr=[];

   if(n==1){
       arr.push(0);
   }
   else if(n==2)
   {
      arr.push(0,1);
   }
   else{
       var a = 0;
       var b = 1;
       arr.push(a,b);

       for(var i = 2; i < n; i++){
          var c=a+b;
          arr.push(c);
          a=b;
          b=c;
       }  
   }
    console.log(arr);  
  
}


fib(5);