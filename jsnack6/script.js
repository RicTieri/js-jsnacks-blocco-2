// Chiedo all'utente un numero e genero attraverso una funzione un numero di quadrati equivalente al numero inserito dall'utente nel DOM, in qualsiasi forma. 

const userChoice = parseInt(prompt('type a number'));
const squareWrapper = document.querySelector('section.wrapper');

for (let i = 0; i < userChoice; i++) {
  squareWrapper.appendChild(getSquare())
}

function getSquare(){
  const newSquare = document.createElement('div');
  newSquare.classList.add('square');
  return newSquare
}