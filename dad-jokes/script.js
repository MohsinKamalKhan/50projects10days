const jokeDiv = document.querySelectorAll('.joke')[0];
const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', getJoke);

async function getJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'get',
        headers: { Accept: 'application/json'}
    });
    const joke = await response.json();
    
    jokeDiv.innerText = joke.joke;
}

getJoke();
