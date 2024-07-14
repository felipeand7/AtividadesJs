/*
01

- Crie um objeto "cat" que possui as seguintes propriedades:
  - name, que recebe o nome do gato;
  - age, que recebe a idade;
  - color, que recebe a cor;
  - bestFriends, que recebe um array com os melhores amigos do gato;
  - sound, que é um método que retorna o miado do gato.
- Exiba o objeto no console.
*/

let cat = {
  nome: "Dino",
  idade: 3,
  cor: "Branco",
  bestFriends: ["refa", "popo"],
  soud: () => {
    console.log("miando")
  },
}
console.log(cat.soud())



/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/

//console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu ${cat.nome}, "age", que recebeu ${cat.idade}, "color", que recebeu ${cat.cor}, "bestFriends", que recebeu um array com os itens ${cat.bestFriends[0]} e ${cat.bestFriends[1]}, e "sound", que recebeu uma função que retorna ${cat.soud()}.`)

/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/

cat.idade = 21
//console.log(cat.idade)

/*
  04
  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/

function addAmigos(value) {
  cat.bestFriends.push(value)
}
addAmigos('amanda')

//console.log(cat.bestFriends)




/*
  05
  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  
 - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
n
*/



function addCor(novaCor) {
  cat["cor"] = novaCor
}

addCor("amarelo")
//console.log(cat["cor"])

/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/

function verificarDado(value) {
  return typeof value === "object" && value !== null
}
//console.log(verificarDado(cat))

/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/

const dog = {
  nome: "amarelinho",
  cor: "amarelo",
  idade: 5,
  dogFriends: [],
  latir: () => {
    console.log("Latindo")
  }
}
const somaIdadec = `A soma das idades de ${cat.nome} e ${dog.nome} é ${cat.idade + dog.idade}.`
//console.log(somaIdadec)
/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/


const cars = ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35']


const isAnSUV = car => {
  const verificar = cars.includes(car)

  if (verificar) {
    return true
  }

  return false
}

console.log(isAnSUV('Honda Civic'))
console.log(isAnSUV('Ford EcoSport'))

/*
  09

  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/


const getTypeDefinition = (type) => {
  const obj = {
    null: 'Seta, explicitamente, uma variável sem valor.',
    undefined: 'Representa um valor não-setado.',
    object: 'Arrays, Datas, Objetos literais, Funções, etc.'
  }

  return obj[type]
}


getTypeDefinition()