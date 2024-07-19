const button = document.querySelectorAll('.button')[0];
const container = document.querySelectorAll('.container')[0];

button.addEventListener('click', () => { 
    container.classList.toggle('active-container');
});