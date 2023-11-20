// Crea una funzione che accetta due numeri, se il primo e' divisibile per il secondo, allora ritorna vero, altrimenti ritorna falso. Micro bonus: se sono uguali ritorna il numero.


const input1 = parseInt(prompt('type a number'))
const input2 = parseInt(prompt('type a number'))

console.log(numberDividend(input1, input2))

function numberDivisibleBy(numOne, numTwo){
  if (numOne === numTwo){
    return numOne
  }
  if (numOne % numTwo === 0){
    return true
  }
  return false
}