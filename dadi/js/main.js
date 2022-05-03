// lancio dadi user e lo stampo
let userThrow = Math.floor(Math.random() * 6) + 1;
console.log(userThrow)
// lancio dati IA e lo stampo
let aiThrow  = Math.floor(Math.random() * 6) + 1;
console.log(aiThrow)
// vittoria/sconfitta/pareggio 
if (userThrow > aiThrow){
    console.log("Complimenti hai vinto")
} else if (userThrow < aiThrow){
    console.log("mi dispiace hai perso")
} else{
    console.log("pareggio!")
}