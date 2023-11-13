var isPlaying = false;

//start marquee and sound
function startFun(){
    //console readback
    console.log("Fun STARTED");
    //Start disabled
    document.getElementById("startButton").disabled = true;
    //stop enabled
    document.getElementById("stopButton").disabled = false;
    //marquee started
    document.getElementById("myMarquee").start();
    //music started
    playBGM();

}
//Stop marquee and sound
function stopFun(){
    //console readback
    console.log("Fun STOPPED");
    //stop disabled
    document.getElementById("stopButton").disabled = true;
    //start enabled
    document.getElementById("startButton").disabled = false;
    //marquee stopped
    document.getElementById("myMarquee").stop();
    //music stopped
    playBGM();

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
    mySound = new startSound("bennyhill_theme.mp3");
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