/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const num0 = 30;
const num2 = 6;

if (num0 > num2) {
  console.log("Il numero piu grande è", num0);
} else {
  console.log("è il numero piu grande", num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const num5 = 5;
const num4 = 6;

if (num5 !== num4) {
  console.log("is not equal a 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
const numerod1 = 5;
const numerod2 = 25;
if (numerod1 % numerod2) {
  console.log("è perfettamente divisibile per 5");
} else {
  console.log("non è perfettamente divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numerod3 = 5;
const numerod4 = 25;
if (numerod3 === 8 || numerod4 === 8 || numerod3 - numerod4 === 8 || numerod3 + numerod4 === 8) {
  console.log("un numero è uguale a 8");
} else {
  console.log(" numero è diverso da 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart;
totalShoppingCart = 60;
if (totalShoppingCart > 50) {
  console.log("l'utente ha diritto alla spedizione gratuita");
  console.log(totalShoppingCart + 10);
} else {
  console.log("l'utente non ha diritto alla spedizione gratuita");
  console.log(totalShoppingCart + 10);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart1 = 60;
let discountValue = (totalShoppingCart1 / 100) * 20;
if (totalShoppingCart1 > 50) {
  console.log("l'utente ha diritto alla spedizione gratuita");
  console.log(discountValue + 10);
  console.log("today is a blackFriday for you a special sscount of 20% ------>price final ".discountValue);
} else {
  console.log("l'utente non ha diritto alla spedizione gratuita");
  console.log(discountValue + 10);
  console.log("today is a blackFriday for you a special sscount of 20%------->final price".discountValue);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const box1 = 1;
const box2 = 2;
const box3 = 3;
let boxtot1;
let boxtot2;
if (box1 > box2) {
  boxtot1 = "box1";
} else {
  boxtot1 = "box2";
}
if (boxtot1 > box3) {
  boxtot2 = "box1";
} else {
  boxtot2 = "boxtot1";
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  */

const prova = "snoopy";
console.log(typeof prova);
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const numero1 = 8;

if (numero1 % 2 === 0) {
  console.log(numero1 + "è un numero pari!");
} else {
  console.log(numero1 + " è numero dispari!");
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

let val = 3;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.notes = "city";
me.city = "Toronto";

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
const prova8 = [];

prova8.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
console.log(prova8);
prova8.pop();
prova8.push(100);
console.log(prova8);
