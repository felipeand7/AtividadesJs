const lis = document.querySelectorAll('li')
const h1 = document.querySelector('h1')
const span = document.querySelector('span')
const body = document.querySelector('body')



//h1.onclick.classList.toggle('test') // toggle serve para alternar, se nao tiver a classe ele adiciona
//h1.classList.toggle('test') // e se tiver ele remove

h1.addEventListener('copy', (copia) => {
  console.log("Texteto copiado")
})

body.addEventListener('mousemove', (move) => {
  span.textContent = `X ${move.offsetX} - Y ${move.offsetY}`
})

lis.forEach((li => {
  li.addEventListener('click', (event) => {
    const clickedElement = event.target
    const virificarClass = clickedElement.innerText
    const addClass = clickedElement.classList
    event.stopPropagation

    if (virificarClass.includes('error')) {
      addClass.toggle('error');
    }
    if (virificarClass.includes('success')) {
      addClass.toggle('success');
    }
  })
}))


/*paragrafos.forEach((paragrafo) => {
  if (paragrafo.innerText.includes('error')) {
    paragrafo.classList.add("error")
  }

  if (paragrafo.innerText.includes('success')) {
    paragrafo.classList.add("success")
  }
})*/