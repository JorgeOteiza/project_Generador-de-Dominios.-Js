/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hola Quilpué");
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

// Array para almacenar las combinaciones de dominios
let domainNames = [];

// Bucles anidados para combinar pronombres, adjetivos y sustantivos
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      // Concatenar los elementos para formar un nombre de dominio
      let domainName = pronoun[i] + adj[j] + noun[k] + ".com";

      // Agregar el nombre de dominio al array
      domainNames.push(domainName);
    }
  }
}

// Imprimir las combinaciones de dominios
for (let l = 0; l < domainNames.length; l++) {
  console.log(domainNames[l]);
}
