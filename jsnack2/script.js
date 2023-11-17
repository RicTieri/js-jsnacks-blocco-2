// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.

const names = ['carlo', 'carla', 'giuseppe', 'giuseppina', 'filippo', 'filippina'];
const surnames = ['carlo', 'carla', 'giuseppe', 'giuseppina', 'filippo', 'filippina'];
let randomName = ''
const randomList = [];

while (randomList.length < 6){
  randomName = names[Math.floor(Math.random()*6)] + ' ' + surnames[Math.floor(Math.random()*6)]
  randomList.push(randomName)
}
console.log( randomList)