function buttonClick() {
    changeBackground();
    playSound();
}


function changeBackground() {
    const body = document.getElementById("body");
    randomNum = Math.random();
    randomHexNum = "#" + (Math.floor(randomNum*16777215)).toString(16);
    console.log(randomHexNum);
    body.style.backgroundColor = randomHexNum;
}


function playSound() {
    const soundFile = new Audio("./sounds/fart.mp3");

    soundFile.currentTime = 0;
    soundFile.play();
}