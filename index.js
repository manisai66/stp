let startButton = document.getElementById('start-btn');
let stopButton = document.getElementById('stop-btn');
let resetButton = document.getElementById('reset-btn');
let lapButton = document.getElementById('lap-btn');
let timeDisplay = document.getElementById('time-display');
let lapList = document.getElementById('lap-list');

let time = 0; 
let interval;
let lapTimes = [];

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', recordLap);

function startStopwatch() {
    interval = setInterval(updateTime, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
    lapButton.disabled = false;
}

function stopStopwatch() {
    clearInterval(interval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetStopwatch() {
    clearInterval(interval);
    time = 0;
    lapTimes = [];
    timeDisplay.textContent = formatTime(time);
    lapList.innerHTML = '';
    startButton.disabled = false;
    stopButton.disabled = true;
    lapButton.disabled = true;
}

function updateTime() {
    time++;
    timeDisplay.textContent = formatTime(time);
}

function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

function recordLap() {
    lapTimes.push(time);
    let lapTime = document.createElement('li');
    lapTime.textContent = formatTime(time);
    lapList.appendChild(lapTime);
}