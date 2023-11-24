// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

const zucchiniType = [
  {
    variety: 'nero di Milano',
    weight: 300,
    lenght: 25,
  },
  {
    variety: 'romanesco',
    weight: 300,
    lenght: 25,
  },
  {
    variety: 'ortolano di Faenza',
    weight: 300,
    lenght: 25,
  },
  {
    variety: 'lunga fiorentina',
    weight: 300,
    lenght: 25,
  },
  {
    variety: 'siciliano',
    weight: 300,
    lenght: 25,
  },
  {
    variety: 'striata di Napoli',
    weight: 300,
    lenght: 25,
  },
  {
    variety: 'bianca triestina',
    weight: 300,
    lenght: 25,
  },
  {
    variety: 'rigata pugliese',
    weight: 300,
    lenght: 25,
  },
  {
    variety: 'tondo di Piacenza',
    weight: 300,
    lenght: 25,
  },
  {
    variety: 'tondo di Nizza',
    weight: 300,
    lenght: 25,
  },
]

let totalWeight = 0

for (let index = 0; index < zucchiniType.length; index++) {
  const zucchina = zucchiniType[index];
  
  totalWeight += zucchina.weight;
}
console.log(totalWeight)