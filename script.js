const timeBox = document.querySelector(".time-box");
const start = document.querySelector(".start-btn");
const pause = document.querySelector(".pause-btn");
const reset = document.querySelector(".reset-btn");
let count = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let updateTimeInterval;

function updateTime(){
    if(milliseconds == 99){
        seconds++;
        milliseconds = 0;
    }
    if(seconds == 59){
        minutes++;
        seconds = 0;
    }
    milliseconds++;

    
    let min_update =  minutes<=9 ? "0"+ minutes : minutes;
    let sec_update = seconds<=9 ? "0"+ seconds : seconds;
    let mil_update  = milliseconds<=9 ? "0"+ milliseconds : milliseconds
    timeBox.textContent = min_update + ":" + sec_update + ":" + mil_update;
}

function handleStart(){
    updateTimeInterval = setInterval(updateTime,10);
    start.disabled = true;
}
function handlePause(){
    clearInterval(updateTimeInterval);
    start.disabled = false;
}
function handleReset(){
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
     min_update =  minutes<=9 ? "0"+ minutes : minutes;
     sec_update = seconds<=9 ? "0"+ seconds : seconds;
     mil_update  = milliseconds<=9 ? "0"+ milliseconds : milliseconds
    timeBox.textContent = min_update + ":" + sec_update + ":" + mil_update;

}

start.addEventListener("click" , handleStart);
pause.addEventListener("click" ,handlePause);
reset.addEventListener("click",handleReset);
