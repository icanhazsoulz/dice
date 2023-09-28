let changeRandomInterval;
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const number = document.getElementById('number');

startBtn.addEventListener('click', () => { startChangeRandom() });
stopBtn.addEventListener('click', () => { stopChangeRandom() });

function randomPoints() {
    return Math.floor(Math.random() * 6) + 1;
}

function startChangeRandom() {
    changeRandomInterval = setInterval(() => {
        number.innerHTML = randomPoints();
    }, 75);
}

function stopChangeRandom() {
    clearInterval(changeRandomInterval);
    changeRandomInterval = null;
}
