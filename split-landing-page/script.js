const leftPart = document.querySelectorAll('.left-part')[0];
const rightPart = document.querySelectorAll('.right-part')[0];
const body = document.getElementsByTagName('body')[0];

rightPart.addEventListener('mouseout', () => {
    body.classList.remove('right-active');
    body.classList.add('left-active');
});

leftPart.addEventListener('mouseout', () => {
    console.log('there');
    body.classList.remove('left-active');
    body.classList.add('right-active');
});