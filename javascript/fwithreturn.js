function Milk(moneygiven,costperbottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("buy bottles according to the moneygiven");
    console.log("bought "+ calnoofbottles(moneygiven,costperbottle) + "  bottles of milk");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    calchange(moneygiven,costperbottle);
}

function calnoofbottles(moneygiven,costperbottle){
    var noofbottles = ( Math.floor ( moneygiven / costperbottle));
    return noofbottles;
}

function calchange(moneygiven,costperbottle){
    var change = moneygiven % costperbottle;
    console.log("master, here is your change "+change);
}

Milk(5,1.5);