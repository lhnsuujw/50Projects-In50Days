const jokeEl = document.getElementById('joke')
const jokeBtnEl = document.getElementById('jokeBtn')

generateJoke()

function generateJoke() {
  jokeBtnEl.addEventListener('click', function () {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        jokeEl.innerText = data.joke
      })
  })
}
