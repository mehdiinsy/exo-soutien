// Exercice 7 : 
// Ecrire un algorithme 'estUnNombrePremier' qui permet de lire un entier ( on suppose 
// que la valeur saisit est strictement positive ) 
// *L’algorithme doit afficher « vrai » si le paramètre est un nombre premier, si non doit 
// afficher « faux » 
// * exemple : 
// * si paramètre 18 le programme affiche faux 
// * si paramètre 23 le programme affiche vrai 
// ** Définition : Un nombre premier est un entier naturel qui admet exactement deux 
// diviseurs distincts entiers et positifs (qui sont alors 1 et lui-même) 
// Exemple de nombres premiers : 2, 3, 5, 7, 11, 13, 17, 19

//Réponse :

const readlineSync = require('readline-sync')

let n = readlineSync.question(" nombre :  ");
if (n%2==0){
console.log('est pas un nombre premier');
}else{
console.log("est un nombre premier"); 
}