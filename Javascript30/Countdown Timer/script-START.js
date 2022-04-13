let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');




function timer(seconds) {
    //clear any existing timer

    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        //Check if we should stop

        if (secondsLeft < 0) {
            clearInterval(countdown);//Clears the countdown
            return;
        }

        //display it
        displayTimeLeft(secondsLeft);

    }, 1000);
}


function displayTimeLeft(seconds) {
    const minutes = Math.floor((seconds / 60));
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const min = end.getMinutes();

    endTime.textContent = `Be back at ${adjustedHour}:${min < 10 ? '0' : ''}${min}`;
}

//Buttons

buttons.forEach(btn => btn.addEventListener('click', startTimer));

function startTimer() {
    const sec = parseInt(this.dataset.time);
    // console.log(sec);
    timer(sec);
}

//Form elements

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins_ = this.minutes.value;
    console.log(mins_);
    timer(mins_ * 60);
    this.reset();
});