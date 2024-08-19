//metodo map
const produtos = [
  { name: "Mouse", price: 30 },
  { name: "Teclado", price: 25 },
  { name: "Tapete de mesa", price: 50 },
  { name: "Repetidor Wifi", price: 23 },
  { name: "Surporte para notebook", price: 44 }
]

produtos.map(produto => {
  if (produto.price >= 30) {
    return { name: produto.name, price: produto.price / 2 } // criando nova arrey com as modificaçoes
  }
  return produto
})



//Metodo filter = serve para cria uma niova arrey somente com os elementops que retornarem true  com a descriçao que voce passa
const numeros = [10, 30, 43, 23, 42, 11]

const user = [
  { name: "Marcos paulo", premium: true },
  { name: "Felipe Andrade", premium: false },
  { name: "Vicente marcos", premium: true },
  { name: "Mauro Santos", premium: false },
  { name: "Amanda terense", premium: true }
]

const premiums = user.filter(({ premium }) => premium) // filtrando e retornando so os usuarios premium




//metodo Reduce


const jogadores = [
  { name: "Marcos paulo", score: 331 },
  { name: "Felipe Andrade", score: 311 },
  { name: "Vicente marcos", score: 94 },
  { name: "Mauro Santos", score: 131 },
  { name: "Amanda terense", score: 234 }
]

const felipeScore = jogadores.reduce((accumulator, phoseScore) => {
  if (jogadores.name === "Felipe Andrade") {
    accumulator += jogadores.score
  }

  return accumulator
}, 0)