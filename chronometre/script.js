let minutesLabel = document.getElementById('minutes');
let secondsLabel = document.getElementById('seconds');
let millisecondsLabel = document.getElementById('milliseconds');
let supp = document.getElementById('supp')

let startButton = document.getElementById('startBtn');
let stopButton = document.getElementById('stopBtn');
let pauseButton = document.getElementById('pauseBtn');
let resetButton = document.getElementById('resetBtn');
let lapList = document.getElementById('laplist');
let animationElement = document.querySelector('.animation');
let pauseBtn = document.getElementById('pauseBtn');


/// stopwatch variables

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);


function startTimer() {

    interval = setInterval(updateTimer, 10);
    startButton.disabled = true;

}

function stopTimer() {

    // clearInterval(interval);
    addToLapList();
    // resetTimerData();
    startButton.disabled = false;
}

function pauseTimer() {
    clearInterval(interval);
    startButton.disabled = false;
}

function resetTimer() {
    clearInterval(interval);
    resetTimerData();
    startButton.disabled = false;

}

// // Fonction pour mettre en pause l'animation
// pauseBtn.addEventListener('click', () => {
//     animationElement.style.animationPlayState = 'paused';
// });

// // Fonction pour reprendre l'animation
// startButton.addEventListener('click', () => {
//     animationElement.style.animationPlayState = 'running';
// });

function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {  //// 1000  -> 1 seconds = 1000 millseconds
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    displayTimer();
}

function displayTimer() {
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

function padTime(time) {
    return time.toString().padStart(2, '0');
}

function resetTimerData() {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
}

function addToLapList() {
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;
    lapList.appendChild(listItem);
}
supp.addEventListener('click', () => {
    lapList.innerHTML = ''
})