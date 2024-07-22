const introSection  = document.querySelectorAll('.intro-section')[0];
const eventsSection = document.querySelectorAll('.events-section')[0];

const key = document.getElementsByTagName('h2')[0];
const keyCode = document.getElementsByTagName('h2')[1];
const code = document.getElementsByTagName('h2')[2];

const RemoveIntroSection = (e) => {
    introSection.classList.add('disappear');
    eventsSection.classList.remove('disappear');

    GetKeys(e);
    document.removeEventListener('keydown', RemoveIntroSection);
    document.addEventListener('keydown', GetKeys);
}

function GetKeys(e) {
    key.innerText = e.key;
    keyCode.innerText = e.keyCode;
    code.innerText = e.code;
}

document.addEventListener('keydown', RemoveIntroSection);