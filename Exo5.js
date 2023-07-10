// Exercice 5 : 
// Ecrire un algorithme qui demande à l’utilisateur de saisir un nombre et de lui afficher son 
// carré
// Exemple du chiffre 7 : 

//Réponse : 
const readlineSync = require('readline-sync')

let carre = readlineSync.question(" carre :  ");

let C = carre*carre;
console.log(C);