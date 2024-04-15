let timer = null; // Pre-initialize timer to null
let isRunning = false;
let startTime = null; // Pre-initialize startTime to null
let elapsedTime = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    } else {
        startTime = Date.now() - (elapsedTime || 0); // Use pre-initialized startTime
        timer = setInterval(updateTime, 10);
        isRunning = true;
    }
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    displayTime(elapsedTime);
}

function displayTime(time) {
    const formattedTime = new Date(time).toISOString().substr(11, 8);
    document.querySelector('.display').textContent = formattedTime;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    displayTime(elapsedTime);
    document.querySelector('.laps').innerHTML = '';
}

function lap() {
    if (isRunning) {
        const lapTime = elapsedTime;
        const formattedLapTime = new Date(lapTime).toISOString().substr(11, 8);
        const lapItem = document.createElement('li');
        lapItem.textContent = formattedLapTime;
        document.querySelector('.laps').appendChild(lapItem);
    }
}
