 // Sélection des éléments
 let longueurs = document.getElementById('longueur');
 let checkbox = document.getElementById('Scaract');
 let Button = document.getElementById('btn');
 let Password = document.getElementById('genPassword');

 // Fonction pour générer un mot de passe
 function generatePassword(longueur, special) {
     let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
     let numbers = '0123456789';
     let specials = '!@#$%^&*()_+[]{}<>?,./';
     let Characters = letters + numbers + (special ? specials : '');

     if (longueur < 4) {
         return 'La longueur doit être d’au moins 4 caractères.';
     }

     let password = '';
     for (let i = 0; i < longueur; i++) {
         const randomIndex = Math.floor(Math.random() * Characters.length);
         password += Characters[randomIndex];
     }
     return password;
 }

 // Événement pour le bouton "Générer"
 Button.addEventListener('click', () => {
     let longueur = parseInt(longueurs.value);
     let Specialchekbox = checkbox.checked;

     let password = generatePassword(longueur, Specialchekbox);
     Password.textContent = password;
 });