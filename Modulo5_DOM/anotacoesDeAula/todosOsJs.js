const paragrafos = document.querySelectorAll('p')
const h1 = document.querySelector('h1')

h1.onclick.classList.toggle('test') // toggle serve para alternar, se nao tiver a classe ele adiciona
h1.classList.toggle('test') // e se tiver ele remove
