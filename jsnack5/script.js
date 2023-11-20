// Crea una funzione che accetta due elementi del dom, uno e' il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.



addDomByQuerySel('body', 'div')


function addDomByQuerySel(parent, child){
  const elder = document.querySelector(parent);
  const newElement = document.createElement(child);
  elder.appendChild(newElement)
}