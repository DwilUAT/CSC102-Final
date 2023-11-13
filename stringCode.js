var isPlaying = false;

function valCreds(){
    //Input Validation Start
    console.log("checkCreds() started");

    //Variable set
    var firstNameV;
    var lastNameV;
    var zipCodeV;
    var fullName;
    var fullNameLength;
    var zipCodeNum;

    //Variable hold
    //Name store and readback
    firstNameV = document.getElementById("firstName").value;
    console.log("The first was submitted as " + firstNameV);
    lastNameV = document.getElementById("lastName").value;
    console.log("The last was submitted as " + lastNameV);
    //Zip Code store and readback
    zipCodeV = document.getElementById("zipCode").value;
    console.log("The Zip Code was submitted as " + zipCodeV);
    //Full name parse
    fullName = firstNameV + " " + lastNameV;
    console.log("The full name was submitted as " + fullName);
    fullNameLength = fullName.length;
    console.log("The length of the full name is " + fullNameLength + " characters");
    //Zip Code parse
    zipCodeNum = parseInt(zipCodeV);
    console.log("The zip code number is " + zipCodeNum);

    //Limit checks: names under 20 characters, zip under 5 characters
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid Full Name. Over 20 Characters.";
        console.log("Name error.");
    }
    else if(zipCodeV.length != 5){
        document.getElementById("loginStatus").innerHTML = "Invalid Zip Code. Less or More than 5 Characters.";
        console.log("Zip error.");
    }
    else{
        console.log("Validated successfully.");
        document.getElementById("loginStatus").innerHTML = "Login Successful";
        alert("Login Validated. Welcome " + fullName + ".");
    }
}

//Palindrome Checker start
function checkPalin(){
    console.log("checkPalin() started");
    
    //Initial storage
    var inputDirect;
    inputDirect = document.getElementById("palinInput").value;
    console.log("User input is " + inputDirect);

    //Remove spaces
    var inputSpaceless;
    inputSpaceless = inputDirect.split(" ").join("");
    console.log("Input without spaces is " + inputSpaceless);

    //Reversed Array and String
    var inputRev;
    const revArray = [];
    var inputLength = inputSpaceless.length - 1;
    console.log("Length of string is " + inputLength);

    //Input into Array and Reverse
    for(var i = inputLength; i >= 0; i--){
        revArray.push(inputSpaceless[i]);
    }

    //Array into String
    inputRev = revArray.join("");
    console.log("Input reversed is " + inputRev);

    //Compare variables
    var inputEqual = 0;
    inputEqual = (inputSpaceless === inputRev);
    console.log("The Equal result is: " + inputEqual);

    //Write palindrome result
    if(inputEqual == true){
        document.getElementById("palinStat").innerHTML = inputDirect + " <b>is</b> a palindrome!";
        console.log("Checker complete");
    }
    else{
        document.getElementById("palinStat").innerHTML = inputDirect + " is <b>not</b> a palindrome!";
        console.log("Checker complete");
    }
}

//Audio Control
function playBGM(){
    //create the audio
    generateAudio();
    //prevent stacking of audio elements, run once
    generateAudio=function(){};
    //audio control console output
    console.log("playBGM toggling audio")
    if(isPlaying==true){
        mySound.stop();
        isPlaying=false;
    }
    else{
        mySound.play();
        isPlaying=true;
    }
    
}

//generate audio
function generateAudio(){
    console.log("generateAudio() started");
    mySound = new startSound("masseffect_galaxymap.mp3");
}

//Sound element generation definition
function startSound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    document.body.appendChild(this.sound);
    console.log("Sound element generated");
    this.play = function(){
        this.sound.play();
        console.log("Sound element playing")
    }
    this.stop = function(){
        this.sound.pause();
        console.log("Sound element paused")
    }
}

