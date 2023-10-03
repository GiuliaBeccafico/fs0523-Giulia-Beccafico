/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function trovaNumeroMaggiore(numero1, numero2) {
  if (numero1 > numero2) {
      return numero1;
  } else {
      return numero2;
  }
}

let numero1 = 10;
let numero2 = 20;

let risultato = trovaNumeroMaggiore(numero1, numero2);
console.log("Il numero più grande è: " + risultato);


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function verificaNumero(numero) {
  if (numero !== 5) {
      let messaggio = "not equal";
      console.log(messaggio);
  }
}

let numberoVerificare = 8;
verificaNumero(numberoVerificare);  /* Output: not equal */
/* La funzione verificaNumero accetta un numero e verifica se è diverso da 5 
 utilizzando l'operatore di disuguaglianza !==. 
 Se il numero è diverso da 5, viene assegnato il messaggio "not equal" alla variabile messaggio
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function divisibilitàPerCinque(numero) {
  if (numero % 5 === 0) {
      let messaggio = "divisibile per 5";
      console.log(messaggio);
  }
}
let numeroDivisibile = 10;
divisibilitàPerCinque(numeroDivisibile);  /* Output: divisibile per 5 */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let opzione1 = 8;
let opzione2 = 3;

if (opzione1 === 8 || opzione2 === 3 || opzione1 + opzione2 === 8 || (opzione1 - opzione2 === 8)) {
  console.log("Uno dei numeri è 8 o la loro somma/differenza è 8.");
} else {
  console.log("Nessuna condizione soddisfatta.");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60;
let costoSpedizione = 0;

if (totalShoppingCart >= 50) {
    costoSpedizione = 0;
} else {
    costoSpedizione = 10;
}

let totale = totalShoppingCart + costoSpedizione;
console.log("Ammontare totale da addebitare all'utente: " + totale);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalCart = 60;
let costoProdotto = totalCart * 0.8; /*Moltiplicando totalCart per 0.8, 
 calcolo l'80% del valore originale. totalShoppingCart * 0.8 rappresenta il prezzo dopo l'applicazione 
 dello sconto del 20%. */
let costoSpedizioneBlackFriday = 0;

if (costoProdotto > 50) {
    costoSpedizione = 0;
} else {
    costoSpedizione = 10;
}
let ammontareTotale = costoProdotto + costoSpedizione;
console.log("Ammontare totale da addebitare all'utente: " + ammontareTotale);


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let medio = 5;
let grande = 10;
let piccolo = 1;

if (medio >= grande && medio >= piccolo) {
    if (grande >= piccolo) {
        console.log(medio, grande, piccolo);
    } else {
        console.log(medio, piccolo, grande);
    }
} else if (grande >= medio && grande >= piccolo) {
    if (medio >= piccolo) {
        console.log(grande, medio, piccolo);
    } else {
        console.log(grande, piccolo, medio);
    }
} else {
    if (medio >= grande) {
        console.log(piccolo, medio, grande);
    } else {
        console.log(piccolo, grande, medio);
    }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function verificaNumero(valore) {
  if (typeof valore === 'number') {
      return 'Il valore fornito è un numero.';
  } else {
      return 'Il valore fornito non è un numero.';
  }
}

let input = 9;
let result = verificaNumero(Number(input));
console.log(result);


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero = 2;

if (numero % 2 === 0) {
    console.log('Il numero fornito è pari.');
} else {
    console.log('Il numero fornito è dispari.');
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10 ma non meno di 5");
} else {
    console.log("Uguale o maggiore a 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let number = [];
number.push(1,2,3,4,5,6,7,8,9,10);
console.log(number)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

number [9] = 100;
console.log(number)