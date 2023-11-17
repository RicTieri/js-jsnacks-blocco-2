// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const array = [];
let sum = 0;
let i = 0;

while ( sum < 50){
  const newNumber = parseInt(prompt('insert a number'));
  array.push(newNumber);
  sum += array[i];
  i++;
}

console.log(array)