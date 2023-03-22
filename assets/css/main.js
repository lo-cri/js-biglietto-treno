/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    prompt per km ed età

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

const prezzo = 0.21;
const sconto_minori = 0.2;
const sconto_anziani = 0.4; 


const km = parseInt(prompt("Quanti chilometri devi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));


let price = km * prezzo;


if (age < 18) {
  price = price - (price * sconto_minori);
} else if (age >= 65) {
  price = price - (price * sconto_anziani);
}


alert("Il prezzo del tuo biglietto è: " + price.toFixed(2) + " €");