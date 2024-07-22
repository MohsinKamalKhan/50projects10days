const crosses = document.querySelectorAll('.cross');
const dropDowns = document.querySelectorAll('.dropdown');

crosses.forEach(cross => {
    cross.addEventListener('click', () => cross.parentNode.classList.remove('active'));
});

dropDowns.forEach(dropDown => {
    dropDown.addEventListener('click', () => dropDown.parentNode.classList.add('active') )
});