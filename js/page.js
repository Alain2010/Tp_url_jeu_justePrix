//Exercice1 url


console.log(window.location);
url_list_id = window.location.search
console.log(url_list_id);


url_params = new URLSearchParams(url_list_id);
console.log(url_params);

const nom = url_params.get('nom');
const prenom = url_params.get('prenom');
const password = url_params.get('password');

// console.log(nom);
// console.log(prenom);
// console.log(password);

console.log(`Nom : ${nom} \n Prenom : ${prenom} \n Mot de passe : ${password}`);



// Exercice 2 Jeu du juste prix

// Définition de l'algorithme pour le jeu du juste prix, reste à appliquer dans le contexte du formulaire...

// const nombre_aleatoire = (Math.floor(Math.random() * 11))
// console.log("Le nombre à trouver : ", nombre_aleatoire);

// let nombre_input = prompt("Trouver le prix, vous avez droit à 5 tentatives");
// let increment = null

// while (nombre_input != nombre_aleatoire) {
//     increment += 1
//     if (increment == 5) {
//         alert("vous avez épuisé toutes vos tentatives, cliquez sur ok");
//         break
//     }

//     if (nombre_input > nombre_aleatoire) {
//         nombre_input = prompt(`Nombre trop grand, vous avez effectué ${increment} essais`)
//     }
//     else if (nombre_input < nombre_aleatoire) {
//         nombre_input = prompt(`Nombre trop petit vous avez effectué ${increment} essais`)

//     }
//     else {
//         alert("Félicitation vous avez gagné cette paire de basket, cliquez sur ok");
//         console.log("Bien joué vous avez trouvé le juste prix");
//     }
// }

let id_value = document.getElementById('price').value;
