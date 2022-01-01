const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActivesClasses()
    panel.classList.toggle('active')
  })
})

function removeActivesClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}


