function playSound(eve){
    const audio = document.querySelector(`audio[data-key="${eve.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${eve.keyCode}"]`);
    
    if(!audio){return};         // so that anything other than asdfghkl doesn't play
    audio.currentTime = 0;      // so that i don't need to wait for sound to finish after press
    audio.play();
    
    key.classList.add("playing");
}

function removeTransition(eve){
    // console.log(eve);
    if (eve.propertyName!== "transform") return;    //skip execution if it's not a transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");     //keys is a nodelist now

keys.forEach(key => key.addEventListener("transitionend", removeTransition));   //remove transition after a specified time

document.addEventListener("keydown", playSound);