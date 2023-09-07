/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  let areaResult = l1 * l2;
  return areaResult;
}

console.log("l area del rettangolo è ", area(6, 6));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
  let result = 0;

  if (n1 === n2) {
    result = (n1 + n2) * 3;
  } else {
    result = n1 + n2;
  }

  return result;
}

console.log(crazySum(2, 2));
console.log(crazySum(5, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1, n2 = 19) {
  let diff = 0;
  if (n1 < 19) {
    diff = Math.abs(n1 - n2);
  } else {
    diff = Math.abs((n1 - n2) * 3);
  }

  return diff;
}

console.log(crazyDiff(1, 19));
console.log(crazyDiff(23, 19));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n1) {
  let result = 0;
  if (100 >= n1 && n1 > 20) {
    result = true;
  } else if (n1 === 400) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

console.log(boundary(30));
console.log(boundary(400));
console.log(boundary(5));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(p = String) {
  if (p.startsWith("EPICODE")) {
    p = p;
  } else {
    p = "EPICODE " + p;
  }
  return p;
}

console.log(epify("EPICODE "));
console.log(epify("CIAONE"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(n1) {
  let result = true;
  if (n1 % 3 === 0 && n1 % 7 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(check3and7(21));
console.log(check3and7(22));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

// function reverseString (" ") {
//     let word= " "
//     for (let i = 0; i < word.length; i++) {
//             word = world.splice(length)
//     }
//     return word
// }

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
