/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

const form = document.querySelector('#form')
const fadback = document.querySelector('.feedback')
const input = document.querySelector('input')
const p = document.createElement('p')

const setClassStyle = style => p.classList = style
const isValidUsername = regex => /^[a-zA-Z]{6,}$/.test(regex)

const showMessage = messagen => {
  p.textContent = messagen  // Define o texto do parágrafo criado
  fadback.insertAdjacentElement('afterbegin', p) // Define o texto do parágrafo criado
}

const clearInputField = () => {
  input.value = ''  // Limpa o campo input
  input.focus()     // Coloca o foco de volta no campo input
}

input.addEventListener('keyup', click => {
  click.stopPropagation() // Impede que o evento 'keyup' se propague para outros elementos

  const inputValue = click.target.value  // Obtém o valor atual do <input> onde a tecla foi pressionada
  const textRegex = isValidUsername(inputValue)

  if (textRegex) {
    showMessage('Username válido =)')  // add mensagem de sucesso
    setClassStyle('username-success-feedback') // add class sucesso no html
    return
  }
  showMessage('"O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e / ou minúsculas"') // add mensagem de sucesso
  setClassStyle('username-help-feedback ') // add class sucesso no html
})

//Atividade 02
form.addEventListener('submit', event => {
  event.preventDefault() // Previne o comportamento padrão do formulário (envio e recarregamento da página)

  const input = event.target.input.value  // Obtém o valor do input
  const testRegex = isValidUsername(input)  // Verifica se o valor do input corresponde à expressão regular

  if (testRegex) {
    showMessage('Username válido =)')  // add mensagem de sucesso
    setClassStyle('username-success-feedback') // add class sucesso no html
    clearInputField() // Define o texto do parágrafo criado
    return
  }
  showMessage('Por favor, insira um username válido :(')
  setClassStyle('submit-help-feedback') //add class error no html 
  clearInputField() // Define o texto do parágrafo criado
})

/*
  03
  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
  
  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas  
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/



// Função personalizada 'some' que verifica se pelo menos um elemento do array passa em um teste especificado por uma função fornecida
const some = (array, func) => {
  // Itera sobre todos os elementos do array
  for (let i = 0; i < array.length; i++) {
    // Aplica a função de teste ao elemento atual do array
    if (func(array[i])) {
      // Se a função de teste retornar 'true' para o elemento atual, retorna 'true'
      return true;
    }
  }
  // Se nenhum elemento passar no teste, retorna 'false'
  return false;
}

// Teste 1: Verifica se pelo menos um elemento do array [1, 2, 3] é maior que 2
console.log(some([1, 2, 3], item => item > 2)); // true
// Explicação:
// 1. Primeiro elemento (1): 1 > 2 => false
// 2. Segundo elemento (2): 2 > 2 => false
// 3. Terceiro elemento (3): 3 > 2 => true
// A função retorna 'true' porque o terceiro elemento passou no teste

// Teste 2: Verifica se pelo menos um elemento do array [1, 3, 5] é igual a 0
console.log(some([1, 3, 5], item => item === 0)); // false
// Explicação:
// 1. Primeiro elemento (1): 1 === 0 => false
// 2. Segundo elemento (3): 3 === 0 => false
// 3. Terceiro elemento (5): 5 === 0 => false
// A função retorna 'false' porque nenhum elemento passou no teste



