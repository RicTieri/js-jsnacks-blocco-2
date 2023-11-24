// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.
const wrapperEl = document.querySelector('.wrapper');

const zucchiniType = [
  {
    variety: 'nero di Milano',
    weight: 300,
    lenght: 28,
  },
  {
    variety: 'romanesco',
    weight: 220,
    lenght: 27,
  },
  {
    variety: 'ortolano di Faenza',
    weight: 285,
    lenght: 24,
  },
  {
    variety: 'lunga fiorentina',
    weight: 271,
    lenght: 29,
  },
  {
    variety: 'siciliano',
    weight: 253,
    lenght: 21,
  },
  {
    variety: 'striata di Napoli',
    weight: 221,
    lenght: 26,
  },
  {
    variety: 'bianca triestina',
    weight: 276,
    lenght: 35,
  },
  {
    variety: 'rigata pugliese',
    weight: 210,
    lenght: 18,
  },
  {
    variety: 'tondo di Piacenza',
    weight: 200,
    lenght: 33,
  },
  {
    variety: 'tondo di Nizza',
    weight: 380,
    lenght: 25,
  },
]

let totalWeight = 0

for (let index = 0; index < zucchiniType.length; index++) {
  const zucchina = zucchiniType[index];
  totalWeight += zucchina.weight;
}

wrapperEl.innerHTML = totalWeight + 'g'