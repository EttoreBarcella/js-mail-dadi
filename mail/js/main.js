// Chiedi all’utente la sua email
const mailUser = prompt("inserisci la tua mail");
// lista di mail ammesse
const mailList= ["franco@gmail.com", "peppe@gmail.com", "roberto@gmail.com"];
// ciclo verifica mail
// do valore di default a bouncer di false (bouncer will act like a switch on/off)
// se mailUser = mailList allora bouncer diventa true 
let bouncer=false;
for(let i =0; i<mailList.length ; i++){
    if (mailUser===mailList[i]){
        bouncer=true;
    }
}
// se bouncer è true sei ammesso altrimenti no 
if(bouncer){
    alert("mail in lista, benvenuto!")
} else {
    alert("mail non in lista, ritenta")
}
