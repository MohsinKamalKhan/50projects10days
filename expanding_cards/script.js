const imageContainers = document.querySelectorAll('.img-container');

for (let i = 0 ; i < imageContainers.length; i++) {
    imageContainers[i].addEventListener('click', () => {
        imageContainers[i].classList.add('active');
        for (let j = 0; j < imageContainers.length; j++) {
            if (i !== j) imageContainers[j].classList.remove('active');
        }
    })
}