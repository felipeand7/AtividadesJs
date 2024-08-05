/*
  01

  - No envio do form, faça com que a página não seja recarregada.
*/

//target passa a referencia do elemento

// const form = document.getElementById('form')

// const clearInput = () => {
//   input.value = ''
//   input.focus()
// }

// const logMessagen = (messagen) => {
//   console.log(messagen)
//   clearInput()

// }

// const handleSubmit = event => {
//   event.preventDefault()

//   const input = event.target.input
//   const regex = /[a-zA-Z0-9]{7,11}/
//   const textRegex = regex.test(input.value)

//   if (textRegex) {
//     logMessagen('O valor inserido no innput e valido')
//     return
//   }
//   logMessagen('Valor invalido =(')
// }
// form.addEventListener('submit', handleSubmit)


/*
  02

  - No envio do form obtenha, através do objeto event, o texto inserido no
    input e exiba-o no console.
*/

/*
  03

  - Teste uma regex que dá match com a palavra "documentation" do parágrafo do
    index.html;
  - Exiba no console o boolean no qual este teste resulta.
*/

// const documentText = "documentation"
// const regext = /[a-z]/
// const verificarRegex = regext.test(documentText)

//console.log(verificarRegex)

/*
  04

  - Escreva uma regex que dê match com a palavra "B99" da string abaixo;
  - A regex não deve conter (literalmente) os caracteres B99;
  - Teste se o match aconteceu e exiba o resultado no console.
*/

// const B99message = 'E o Terry Crews faz tudo, inclusive tocar a abertura de B99 na flauta'
// const regexB99 = /[A-Z][1-99]/
// const testB99 = regexB99.test(B99message)

//console.log(testB99)
/*
  05

  - Modifique (manualmente) o valor que a const word armazena para que o
    resultado do teste entre a regex e a string exibido no console seja true.
*/

// const word = 'O QUE NASA FOTOGRAFO DO DIA DO ANIVERSARIO?'
// const NASARegex = /^[A-Z]{4}$/
// const NASAResult = NASARegex.test(word)

// console.log(NASAResult)

/*
  06

  - No envio do form, se o valor inserido no input conter, no mínimo, 7
    caracteres, que podem ser quaisquer caracteres, exiba no console a mensagem
    "O valor inserido no input é válido =)";
  - Caso contrário, exiba "Valor inválido =(" no console.



  Exemplos:
    - "a[b@X7c" é um valor válido, pois contém 7 caracteres;
    - "jozeti" não é um valor válido, pois contém 6 caracteres.
*/
// const input = document.getElementById('input')


// form.addEventListener('submit', event => {
//   const minimoRegex = /.{7}/
//   const estRegex = minimoRegex.test(input)

//   event.preventDefault()

//   if (estRegex) {
//     console.log('Passou =)')
//   } else {
//     console.log('Nao passou =)')
//   }
// })



/*
  07

  - Agora, no envio do form, faça com que o valor permitido contenha de 7 a 11 
    caracteres mas não contenha caracteres especiais. Apenas letras maiúsculas  
    ou minúsculas e números serão permitidos.

  Exemplos:
    - "0xY79aYx54e" é um valor válido, pois contém 11 letras e números;
    - "eich_1961" não é um valor válido, pois contém um caractere especial.
*/



const form = document.getElementById('form')
const regex = username => /^[a-zA-Z]{6,12}$/.test(username)


//submit  
form.addEventListener('submit', event => {
  event.preventDefault() // não deixa a pagina recarregar 

  const input = event.target.input.value
  const textRegex = regex(input)
  const fedback = document.querySelector('.fedback')

  if (textRegex) {
    fedback.textContent = 'Aprovado'
    return
  }
  fedback.textContent = 'acesso negado'
})


//mudar cor de input de acordo com oque foi digitado para p usuario 
form.addEventListener('keyup', event => {
  const isAValididUsername = regex(event.target.value)
  console.log(isAValididUsername)

  if (isAValididUsername) {
    form.setAttribute('class', 'success') // add e remove class 
    return
  }

  form.setAttribute('class', 'error')

})