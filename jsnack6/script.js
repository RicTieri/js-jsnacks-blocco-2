// Chiedo all'utente un numero e genero attraverso una funzione un numero di quadrati equivalente al numero inserito dall'utente nel DOM, in qualsiasi forma. 

const userChoice = parseInt(prompt('type a number'));
const squareWrapper = document.querySelector('section.wrapper');





function getSquare(n){
  const newSquare = document.createElement('div');
  let i=0;
  while (i=n){
    newSquare.classList.add('square');
    squareWrapper.appendChild(newSquare);
    i++
  }
}