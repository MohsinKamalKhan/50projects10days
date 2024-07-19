const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', translateIn);    

translateIn();

function translateIn() {
    const windowHeight = window.innerHeight;
    cards.forEach( card => {
        const cardTop = card.getBoundingClientRect().top;
        console.log(cardTop, windowHeight);
        if (cardTop < windowHeight) {
            card.classList.add('active_card');
        } else {
            card.classList.remove('active_card');
        }
    });
}   
