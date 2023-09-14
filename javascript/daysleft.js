function lifeInWeeks(age) {
        //finding totaldays,totalweeks,totalmonths till 90
        var totaldays = 90*365;
        var totalweeks = 52*90;
        var totalmonths = 90*12;
        //finding left days,weeks,months until 90
        var leftdays = totaldays - (age*365);
        var leftweeks = totalweeks - (age*52);
        var leftmonths = totalmonths - (age*12);
        
        //printing the statement
        
        console.log("You have "+leftdays+" days, "+leftweeks+" weeks, and "+leftmonths+" months left.")
        
    /*************or can be done in one function by showing the diff of age  in totaldays,totalmonths,totalweeks**********/
    }

    lifeInWeeks(46);