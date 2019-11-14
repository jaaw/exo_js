let word = "";
let letter;

while (true) {
    letter = prompt("Comment tu t'appele ? ");

    if (letter) {
        word += letter; //on rajoute la lettre saisie à la suite du mot
        console.log(`Bonjour : ${word}`);
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        break; // On quitte la boucle
    }
}
