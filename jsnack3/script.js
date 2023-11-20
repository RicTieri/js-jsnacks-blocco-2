// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const wordOne = prompt('inserisci una parola')
const wordTwo = prompt('inserisci una parola')

function longestWord(input1, input2){
  if(input1.length > input2.length){
    return input1
  }else if(input1.length > input2.length){
    return input2
  } else {
    return input1 + ' ' + input2
  }
}

console.log(longestWord(wordOne, wordTwo))