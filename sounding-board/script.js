const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.getElementsByTagName('p');

let audios = new Array(sounds.length);
for (let i = 0; i < sounds.length; i++) {
    audios[i] = new Audio(`./sounds/${sounds[i]}.mp3`);
}

let currentlyPlaying = null;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (currentlyPlaying !== null && currentlyPlaying !== audios[i]) {
            currentlyPlaying.pause();
            currentlyPlaying.currentTime = 0;
        }
        currentlyPlaying = audios[i];
        audios[i].play();
    });
}
