const blurryOverlay = document.querySelectorAll('.blurry-overlay')[0];
const loadingTimer = document.querySelectorAll('.loading-timer')[0];
let i = 100;

const loadingFunc = setInterval(() => {
    if (i === 0) {
        clearInterval(loadingFunc);
    }
    blurryOverlay.style.backdropFilter = `blur(${i}px)`;
    loadingTimer.style.opacity = i/10;
    loadingTimer.innerText = `${100 - i}%`;
    i--;
}, 30);