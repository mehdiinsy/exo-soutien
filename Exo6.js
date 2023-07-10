// Exercice 6 : 
// Ecrivez un algorithme qui demande un numéro de jour, de mois et d'année à l'utilisateur, 
// et renvoie s'il s'agit ou non d'une date valide. 
// Cet exercice est certes d’un manque d’originalité affligeant, mais après tout, en 
// algorithmique comme ailleurs, il faut connaître ses classiques ! Et quand on a fait cela 
// une fois dans sa vie, on apprécie pleinement l’existence d’un type numérique « date » 
// dans certains langages…). 
// Il n'est sans doute pas inu�le de rappeler rapidement que le mois de février compte 28 jours, 
// sauf si l’année est bissex�le, auquel cas il en compte 29. L’année est bissex�le si elle est divisible 
// par quatre. Toutefois, les années divisibles par 100 ne sont pas bissex�les, mais les années 
// divisibles par 400 le sont. Ouf !

//Réponse : 
const readlineSync = require('readline-sync')

let date = readlineSync.question(" date format jj/mm/aaaa :  ");

let [jour,mois,annee] = date.split('/');
let mois31 = [1,3,5,7,8,10,12];
let mois30 = [4,6,9,11];
if( mois31.includes(parseInt(mois))){
if(parseInt(jour)<1 || parseInt(jour)>31){
console.log('invalide');
}else{
console.log('valide');
}
}
if(mois30.includes(parseInt(mois))){
if(parseInt(jour)<1 || parseInt(jour)>30){
console.log('invalid');
}else{
console.log('valid');
}
}else if(parseInt(mois)===2){
if(parseInt(annee)%4===0 && parseInt(annee%100 !==0 || parseInt(annee)%400===0)){
if (parseInt(jour)<1 || parseInt(jour)>29){
console.log('invalid');
}else{
console.log('valid');
}else{
if(parseInt(jour)<1 || parseInt(jour)>28){
console.log('invalid');
}else{
console.log('valid');
}
}
}else{
console.log('invalid');
}
}
