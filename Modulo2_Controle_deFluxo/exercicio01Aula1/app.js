/*
  01 - Suba o seu servidor local e:

  - Armazene em uma constante "my3FavoriteTVShows" suas 3 séries favoritas;
  - Se você não assiste séries, armazene seus 3 filmes favoritos;
  - Armazene em uma constante "sentence" a frase abaixo, modificando "SÉRIE_01,  
    SÉRIE_02 e SÉRIE_03" para as suas séries favoritas;
  - O "e" antes do nome da última série deve ser mantido;
  - Forme essa frase sem digitar o nome das séries (claro) e sem utilizar  
    a notação "array[index]";
  - Exiba a frase no console.

  "Minhas 3 séries favoritas são: SÉRIE_01, SÉRIE_02 e SÉRIE_03."
*/

const my3FavoriteTVShows = ["Andreia", "Angelina", "loren"];  // uma constante com uma arry a qual amazena o nome da minha mae é duas irmaes 
const sentence = `Minhas 3 séries favoritas são: ${my3FavoriteTVShows.join(", ")}` // join ira adicionar itens entre um elemento da arry e outro
  .replace(", l", " é l") //  replace = jubistituindo elementos de uma arrei, nesse caso oque eu quero remover é o ", l" é o subistituir por " é l"

//console.log(sentence)




/*
  02 - Comente o console.log() acima e:

  - Exiba no console um boolean indicando se o array de séries que você criou  
    possui 3 itens.
*/

//console.log(my3FavoriteTVShows.length === 3) // lenngth me mostra a quantidade de items da arreym, logo apos de pega a quantidade dos items  estou verificando se é ingual a 3, se for retornara true

/*
  03 - Comente o console.log() acima e:

  - Após a constante abaixo, armazene em uma constante "isRandomTVShowIncluded"  
    um boolean que indica se a série que a "randomTVShow" armazena é uma das  
    suas 3 séries favoritas;
  - Utilize o método adequado para fazer essa verificação;
  - Exiba no console o boolean que a "isRandomTVShowIncluded" recebeu.
*/

const randomTVShow = 'Watchmen' // estou amazernando um nome na arrey
const isRandomTVShowIncluded = randomTVShow.includes('Watchmen') //incluede verifica se o nome que eu to ferificando e o mesmo que tem na arry
//console.log(isRandomTVShowIncluded);

/*
  04 - Comente o console.log() acima e:

  - Armazene a frase abaixo em uma constante "typeSentence", substituindo  
    "TIPO_DE_DADO" pela informação correta;
  - Utilize o operador adequado para gerar essa informação;
  - Exiba a "typeSentence" no console.

  "O tipo de dado que a const "isRandomTVShowIncluded" armazena é: TIPO_DE_DADO."
*/

const typeSentence = `O tipo de dado que a const "isRandomTVShowIncluded: ${typeof isRandomTVShowIncluded}`; // typeof me rotorna o tipo de dado que a arry esta amarzenando nesse caso e boolen por ser true
//console.log(typeSentence)




/* 44777


  05 - Comente o console.log() acima e:

  - Exiba a frase abaixo no console, substituindo "NÚMERO_DE_CARACTERES" por 39  
    e "BOOLEAN" pela informação correta (true ou false);
  - Converta explicitamente este boolean em uma string ao inserí-lo na frase;
  - A 1ª letra do boolean deve ser maiúscula;
  - Dica: se você perceber que está repetindo o mesmo número na string, cogite  
    armazenar este número em uma constante e usá-la na frase.

  "A string que a "typeSentence" armazena tem mais de NÚMERO_DE_CARACTERES  
  caracteres? BOOLEAN."
*/


const nunberToCheck = 39

//console.log(`A string que a "typeSentence" armazena tem mais de 39 
//caracteres? ${String(typeSentence.length > nunberToCheck).replace("t", "T")}`) //lestou convertendo todos os dados para String, apos pega a quantidade de caracteres que contem na String com o metodo {length} estou verificando se a quantidade e maio que 39


/*
  06 - Comente o console.log() acima e:

  - Após a constante "falsyValues", exiba no console a frase abaixo,  
    substituindo "NÚMERO_DE_ITENS" e "BOOLEAN" pelas informações corretas.

  "Todos os NÚMERO_DE_ITENS itens do array "falsyValues" são falsy. Inclusive o  
  BOOLEAN."
*/

const falsyValues = [0, "", false, '', ``, null, undefined, NaN]
//console.log(`Todos os ${falsyValues.length} itens do array "falsyValues" são falsy. Inclusive o  
//${falsyValues[2]}`);// amazenei em uma tanplete string {${}} em seguida com length peguei a quantidade de caracteres da arrey, apos isso estou esibido o index do item 2 da arrey que false

/*
  07 - Comente o console.log() acima e:

  - Armazene em uma constante "crazyOperation" a soma entre null e 1;
  - Armazene em uma constante "crazyConversion" a conversão da "crazyOperation"  
    em boolean.
  - Você sabe por que essa conversão resultou em true?
*/

const crazyOperation = null + 1  // null e considerado como 0, null + 1 sera iqual a 1 é um e true
const crazyConversion = Boolean(crazyOperation) //amazendo em uma constante e convertendo os dados da crazyOperation  para boolen true/false
//console.log(crazyConversion) // mostrando no console do navegador



/*
  08 - Comente o console.log() acima e:

  - Armazene em uma constante "ages" um array com os números 31, 82, 61 e 11;
  - Armazene em uma constante "agesSum" a soma entre 1º e 3º itens do array  
    "ages";
  - Exiba a frase abaixo no console, substituindo "BOOLEAN" pela informação  
    correta.

  "A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação  
  é: BOOLEAN."
*/

const ages = [31, 82, 61, 11]
const agesSum = ages[0] + ages[2]; // pegando os dois index para fazer a soma do primeiro e terceiro item da arrey
//console.log(`A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação  
//é: ${agesSum}`)



/*
  09 - Comente o console.log() acima e:

  - Armazene em uma const "isNotAString" uma expressão que verifica se o tipo de  
    dado que a "randomTVShow" armazena não é uma string;
  - Essa expressão deve resultar em false.
  - Exiba a "isNotAString" no console.
*/

const isNotAString = randomTVShow === String
console.log(isNotAString)



/*
  10 - Comente o console.log() acima e:

  - Abaixo da constante "evenNumbers", exiba no console um boolean que indica se  
    o número 8 existe no array;
  - Não utilize o método includes desta vez.
*/

const evenNumbers = [0, 2, 4, 6, 8, 10]
console.log(evenNumbers.indexOf(8) !== -1)  // com o indexOf estou buscando o item na arry na qual retorna a sua posiçao, em seguida eu estou verificando se o dados retornado pelo indexOf e -1 para me retornar um boolean
