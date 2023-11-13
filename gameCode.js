function playCraps() {
    //Start of Craps function
    console.log("playCraps() started");
    //Variables for the dice rolls
    var chance1 = Math.ceil(Math.random() * 6);
    var chance2 = Math.ceil(Math.random() * 6);
    //Console logs for dice rolls
    console.log("Dice rolled and stored. Chance1 = " + chance1);
    console.log("Dice rolled and stored. Chance2 = " + chance2);
    //Casting dice results to page
    document.getElementById("dice1res").innerHTML = chance1;
    document.getElementById("dice2res").innerHTML = chance2;
    //Variable of the sum
    var total = chance1 + chance2;
    //Casting of sum to the page
    document.getElementById("sumRes").innerHTML = total;
    //Check for loss
    if (total == 7) {
        document.getElementById("gameRes").innerHTML = "Oh, CRAPS! You LOST!"
        console.log("Result calculated. Loss.")
    }
    else if (total == 11) {
        document.getElementById("gameRes").innerHTML = "Oh, CRAPS! You LOST!"
        console.log("Result calculated. Loss.")
    }
    //Check for win
    else if (chance1 == chance2){
        if(chance1 % 2 == 0){
            document.getElementById("gameRes").innerHTML = "You WON!!"
            console.log("Result calculated. Win.")
        }
        else {
            document.getElementById("gameRes").innerHTML = "You pushed!"
            console.log("Result calculated. Null.")
        }
    } 
    //Neither win nor Lose
    else {
        document.getElementById("gameRes").innerHTML = "You pushed!"
        console.log("Result calculated. Null.")
    }
}