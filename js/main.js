/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    const etat =  video.paused ? 'play' : 'pause';
    video[etat]();
}

function updateBtn() {
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;

}

player.addEventListener('click', togglePlay);
