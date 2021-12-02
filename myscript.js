/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/


let userName = prompt("Nome");

userSurname = prompt("Cognome");

userColor = prompt("Colore preferito");

console.log(userName);

console.log(userSurname);

console.log(userColor);

//const totalData = "userName" + " " + "userSurname" + " " + "useColor";

//console.log(totalData)

document.getElementById("userData").innerHTML= `userName` + ` ` + `userSurname` + ` ` + `userColor` ;
console.log(userData);

