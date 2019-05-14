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
 * Pour faire ces exercices, lisez attentivement les instructions suivantes.
 *
 * Pour tester votre code, j'utilise des fonctions (qu'on verra bientôt dans
 * le cours ;-) !). Leur déclaration ressemble à ça :
 * 
 * function nomFonction(variable1, variable2) {
 *   ...
 * }
 * 
 * Ne supprimez pas ces fonctions ! Ne supprimez pas non plus l'accolade
 * fermante du bloc d'instructions de ces fonctions.
 * 
 * Insérez votre code à l'intérieur des fonctions, et tout ira bien !
 * 
 * Lisez tous les commentaires partout, merci ! 👍
 */

// Exercice 0
function exercice0(prochainClient) { // Ne supprimez/commentez pas cette ligne

  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Utilisez l'instruction prochainClient.mesurerPoids() pour récupérer la valeur du poids du
  // prochain client. N'oubliez pas de mettre les parenthèses "()" à la fin de cette instruction !

  // Décommentez le code de Tom ci-dessous
  let poidsClient = prochainClient.mesurerPoids();
  console.log(`${poidsClient} kg`);

  // <===== FIN DE VOTRE CODE CI-DESSUS =====>

} // Ne supprimez pas cette accolade fermante

// Exercice 1
function exercice1(prochainClient) { // Ne supprimez/commentez pas cette ligne

  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>

  // Décommentez le code de Tom ci-dessous
  for (let i = 0; i < 2; i++) {
    let poidsClient = prochainClient.mesurerPoids();
    console.log(poidsClient);
  }



  // <===== FIN DE VOTRE CODE CI-DESSUS =====>

} // Ne supprimez pas cette accolade fermante

// Exercice 2
function exercice2(prochainClient) { // Ne supprimez/commentez pas cette ligne

  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>

  // Décommentez le code de Tom ci-dessous
  let poidsClient = prochainClient.mesurerPoids();

  while (poidsClient !== 0) {
    console.log(poidsClient); 
    poidsClient = prochainClient.mesurerPoids();
  }




  // <===== FIN DE VOTRE CODE CI-DESSUS =====>

} // Ne supprimez pas cette accolade fermante

// Exercice 3
function exercice3(nombreDeTours) { // Ne supprimez/commentez pas cette ligne

  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Utilisez la variable nombreDeTours qui contient le nombre de tours à faire pour la file d'attente actuelle

  // Décommentez le code de Tom ci-dessous

  let duree = nombreDeTours * 12;
  let nombreHeures = String(Math.floor(duree / 60)).padStart(2, "0");
  let nombreMinutes = String(duree % 60).padStart(2, "0");
  console.log(nombreHeures + "h" + nombreMinutes);

  // <===== FIN DE VOTRE CODE CI-DESSUS =====>

} // Ne supprimez pas cette accolade fermante

// Exercice 4
function exercice4(longueurGuirlande) { // Ne supprimez/commentez pas cette ligne

  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Utilisez la variable longueurGuirlande qui contient le nombre d'étoiles à afficher pour la guirlande

  // Décommentez le code de Tom ci-dessous
  let ligne = "";
  for (let i = 0; i < longueurGuirlande; i++) {
    ligne += "*";
  }
  console.log(ligne);

  // <===== FIN DE VOTRE CODE CI-DESSUS =====>

} // Ne supprimez pas cette accolade fermante

// Exercice 5
function exercice5(longueurGuirlande) { // Ne supprimez/commentez pas cette ligne

  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Utilisez la variable longueurGuirlande qui contient la longueur de la guirland à afficher

  // Décommentez le code de Tom ci-dessous
  let ligne = "";
  for (let i = 0; i < longueurGuirlande; i++) {
    const decoration = i % 2 == 0 ? "*" : "o"
    ligne += decoration;
  }
  console.log(ligne);
  // <===== FIN DE VOTRE CODE CI-DESSUS =====>

} // Ne supprimez pas cette accolade fermante

// Chassez le bogue ! 0
function exercice6(largeurTriangle) { // Ne supprimez/commentez pas cette ligne

  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Utilisez la variable largeurTriangle qui contient la largeur du triangle à afficher

  // Décommentez le code de Tom ci-dessous
  let ligne = "";
  for (let longueurLigne = largeurTriangle; longueurLigne > 0; longueurLigne -= 2) {
    // On construit la ligne à afficher
    for (let position = 0; position < longueurLigne; position++) {
      ligne = ligne + "*";
    }
    console.log(ligne);
    ligne = "";
  }

  // <===== FIN DE VOTRE CODE CI-DESSUS =====>

} // Ne supprimez pas cette accolade fermante

// Chassez le bogue ! 1
function exercice7(largeurTriangle) { // Ne supprimez/commentez pas cette ligne

  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Utilisez la variable largeurTriangle qui contient la largeur du triangle à afficher

  // Décommentez le code de Tom ci-dessou
  // console.log(largeurTriangle);
  let ligne = "";
  for (let longueurLigne = 0; longueurLigne < largeurTriangle; longueurLigne = longueurLigne + 2) {
    // On construit la ligne à afficher
    for (let position = 0; position <= longueurLigne; position++) {
      ligne += "*";
    }
    console.log(ligne);
    ligne = "";
  }
  for (let longueurLigne = largeurTriangle - 1; longueurLigne > 0; longueurLigne = longueurLigne - 2) {
    // On construit la ligne à afficher
    for (let position = 0; position < longueurLigne - 1; position++) {
      ligne += "*";
    }
    console.log(ligne);
    ligne = "";
  }

  // <===== FIN DE VOTRE CODE CI-DESSUS =====>

} // Ne supprimez pas cette accolade fermante


// Exercice 8
function exercice8(prochainClient) { // Ne supprimez/commentez pas cette ligne

  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>

let nombreDeTours = 0;
let poidClient = prochainClient.mesurerPoids();
let sommePoidsPourCeTour = 0;

function fileAttentePasVide() {
  return poidClient !== 0;
}

function enDessousLimitePoid() {
  return sommePoidsPourCeTour <= 500 - poidClient;
}

while (fileAttentePasVide()) {
  while (enDessousLimitePoid() && fileAttentePasVide()) {
    sommePoidsPourCeTour += poidClient;
    poidClient = prochainClient.mesurerPoids();
  }
  nombreDeTours++;
  sommePoidsPourCeTour = 0;
}

if (nombreDeTours === 0 || nombreDeTours === 1) {
  console.log(nombreDeTours + " tour");
} else {
  console.log(nombreDeTours + " tours");
}












  // Décommentez le code de Tom ci-dessous
  // let poidsClient = prochainClient.mesurerPoids();
  // let sommePoidsPourCeTour = 0;
  // let nombreDeTours = 0;
  // // Comment faire ma boucle ici ?


  // <===== FIN DE VOTRE CODE CI-DESSUS =====>

} // Ne supprimez pas cette accolade fermante

