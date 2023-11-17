// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.

const names = ['carlo', 'carla', 'giuseppe', 'giuseppina', 'filippo', 'filippina'];
const surnames = ['carlo', 'carla', 'giuseppe', 'giuseppina', 'filippo', 'filippina'];
let maxListLength = 0
let randomName = '';
const randomList = [];

if(names.length < surnames.length){
  maxListLength = surnames.length
} else{
  maxListLength = names.length
}

while (randomList.length <= maxListLength){
  randomName = names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)]
  randomList.push(randomName)
}
console.log(randomList)