// Getting elements which we need
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');





//Play-Pause function
function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.innerHTML = "❚ ❚";
    }
    else {
        video.pause();
        toggle.innerHTML = "▶";
    }
}

//Skip button
function skip() {
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

// playback speed and volume
function handleUpdate() {
    video[this.name] = this.value;
}

//Progress bar
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
//Hook up eventlistner
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleUpdate));

video.addEventListener('timeupdate', handleProgress);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {
    if (mousedown) {
        scrub(e);
    }
});
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);



