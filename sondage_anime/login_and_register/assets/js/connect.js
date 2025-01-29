document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Vérification de l'email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour vérifier une adresse email valide
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }

    // Vérification du mot de passe
    let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!passwordRegex.test(password)) {
        alert("Le mot de passe doit contenir au moins 6 caractères, une lettre majuscule et un caractère spécial.");
        return;
    }


    // Si tout est valide
    console.log('Tentative de connexion avec :', {
        email: email,
        password: password
    });
        // Recharge la page
        window.location.href =`../site de vote en ligne/index.html`;

});


