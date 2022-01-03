const search = document.querySelector('.search')
const btn = search.querySelector('.btn')
const input = search.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})
