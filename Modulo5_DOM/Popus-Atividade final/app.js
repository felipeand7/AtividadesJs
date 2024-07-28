const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')


button.addEventListener('click', () => {
  popup.style.display = 'block'
})

popup.addEventListener('click', event => {
  const classNameClickElement = event.target.classList[0]
  const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
  const shouldClosePopup = classNames.some(className =>
    className === classNameClickElement)
  //SOME = verificar ser algum elemento da arry retornara true, se for true ele executara oque foi pedido

  if (shouldClosePopup) {
    popup.style.display = 'none'
  }
})