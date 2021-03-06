/*
 * Tapez votre code sous chacun des commentaires.
 * Vous devez faire les exercices dans l'ordre !
 *
 * Si vous rencontrez un bogue, contactez-moi par email à l'adresse
 * jeremy@javascriptdezero.com ou via slack : https://javascriptdezero.slack.com.
 *
 * Merci et bon courage ! 🤘
 */

/*****************************************************************************
 *          📣 OYEZ OYEZ BRAVES DÉVELOPPEURS ET DÉVELOPPEUSES ! 📣            *
 *****************************************************************************
 *
 * Maintenant vous savez ce que sont les fonctions.
 * Ne supprimez pas les fonctions déjà écrites !
 * 
 * Insérez votre code là où c'est demandé et tout ira bien :).
 * 
 * Lisez tous les commentaires partout, merci ! 👍
 */

// Exercice 0
// Voici la toute première fonction que Tom a écrite
function maPremiereFonction() {
  console.log("Ma première fonction");
}

// <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
// Qu'est-ce que Tom a oublié de faire ? Rédigez le code manquant ci-dessous :

maPremiereFonction();

// <===== FIN DE VOTRE CODE CI-DESSUS =====>

// Exercice 1
// Pour faire cet exercice : 
// 1. Décommentez le code de Tom en bas de cet exercice
// 2. Rédigez la fonction afficherTitre(titre) sous la déclaration de variable adresseMagiciensDuCode
// 3. Tant qu'une fonction afficherTitre(titre) n'est pas rédigée aucun résultat ne sera affiché
// dans le navigateur !

// Tom a stocké l'adresse dans une variable, des fois qu'ils déménagent un jour...
let adresseMagiciensDuCode = `MagiciensDuCode
42 avenue de l'accolade ouvrante
1337 POINT-VIRGULE`;
// <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
// Rédigez la fonction afficherTitre(titre) ci-dessous

function afficherTitre(titre) {
  console.log(`===[ ${titre} ]===`);
}

// <===== FIN DE VOTRE CODE CI-DESSUS =====>

// Voici le code de départ de Tom, décommentez-le.
afficherTitre("Notre adresse");
console.log(adresseMagiciensDuCode);

// Exercice 2
// Pour faire cet exercice :
// 1. Décommentez le code sous la fonction afficherNumeroClient()
// 2. Complétez la fonction afficherNumeroClient() comme il faut ci-dessous

// Modifiez la fonction afficherNumeroClient pour que le format du numéro client soit toujours correct
function afficherNumeroClient(numero) {
  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  console.log("N° de client : 42" + String(numero).padStart(4, "0"));
  // <===== FIN DE VOTRE CODE CI-DESSUS =====>
}

// Voici le code de test qu'a déjà rédigé Tom, décommentez-le sans le modifier.
afficherNumeroClient(0);
afficherNumeroClient(1);
afficherNumeroClient(9);
afficherNumeroClient(10);
afficherNumeroClient(99);
afficherNumeroClient(100);
afficherNumeroClient(999);
afficherNumeroClient(1000);
afficherNumeroClient(9999);

// Exercice 3
// Pour faire cet exercice :
// 1. Décommentez le code sous la fonction afficherEntete()
// 2. Complétez la fonction afficherEntete() comme il faut ci-dessous
function afficherEntete(numeroClient) {
  afficherTitre("Notre adresse");
  console.log(adresseMagiciensDuCode);
  console.log("");
  afficherTitre("Vos références");
  afficherNumeroClient(numeroClient);
  // <===== FIN DE VOTRE CODE CI-DESSUS =====>
}
// Décommentez le code ci-dessous pour commencer l'exercice
afficherEntete(1337);

// Corrigez le bogue ! 0
// Décommentez le code du stagiaire ci-dessous et corrigez tous les bogues !
function afficherPlusieursEtoiles(nombre) {
  let ligne = "";
  for (let position = 0; position < nombre; position = position + 1) {
    ligne = ligne + "*";
  }
  console.log(ligne);
}
function afficherTriangleEtoile(longueurMax) {
  for (let position = 1; position <= longueurMax; position = position + 2) {
    afficherPlusieursEtoiles(position);
  }
  for (let position = longueurMax - 2; position > 0; position = position - 2) {
    afficherPlusieursEtoiles(position);
  }
}
afficherTriangleEtoile(7);
