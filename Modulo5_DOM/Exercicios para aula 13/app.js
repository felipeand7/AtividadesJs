/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/
const titlesh1 = document.querySelector('h1')

titlesh1.textContent = titlesh1.textContent.toLocaleUpperCase()

//extContent serve para modificar Strings
//toLocaleUpperCase serve para colocar tudo maisculo



/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55]
let list = document.getElementsByClassName("number")


/*numbers.forEach(numbe => {
  const newContent = document.createTextNode(numbe)
  const currentDiv = document.getElementById("div1");
  const li = document.createElement('li')

  li.appendChild(newContent)
  document.body.insertBefore(li, currentDiv);
  li.style
})*/



/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

numbers.forEach(numbe => {
  const newContent = document.createTextNode(numbe)
  const currentDiv = document.getElementById("div1");
  const li = document.createElement('li')

  li.appendChild(newContent)
  document.body.insertBefore(li, currentDiv);

  li.style =
    li.style.marginTop = '10px'

  if (numbe % 2 === 0) {
    li.style.color = "lightblue"
    li.style.backgroundColor = "black"
  }
  else {
    li.style.color = "pink"
    li.style.backgroundColor = "black"

  }
})





/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

let bodyy = document.querySelector("body")

bodyy.classList.add("body-background")



/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

const github = "https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo "
let links = document.querySelector(".link")
links.setAttribute('href', github)


//setAttribute serve ara subistituir elementos, HREF é o elemento que marquei no qual sera subistuido pelo github





/*
  06
  - Exiba o novo valor do atributo href do link no console.
*/

console.log(links.href)

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser
    manipuladas via JS no h1.
*/
//console.log(titlesh1.style)

/*
  08

  - Remova a classe "body-background", do elemento body.
*/


//bodyy.classList.remove("body-background")


/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/

links.classList.toggle('link')
