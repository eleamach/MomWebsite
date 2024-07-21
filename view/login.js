$(document).ready(function() {
    // Charger le header
    $("#header").load("header.html", function() {
        console.log('Header chargé');

        const loginBtn = document.getElementById('login-btn');
        const logoutBtn = document.getElementById('logout-btn');

        if (loginBtn && logoutBtn) {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Vérifier si l'utilisateur est connecté

            if (isLoggedIn) {
                loginBtn.style.visibility = 'hidden'; // Cacher le bouton tout en conservant son espace
                logoutBtn.style.visibility = 'visible'; // Afficher le bouton de déconnexion
            } else {
                loginBtn.style.visibility = 'visible'; // Afficher le bouton de connexion
                logoutBtn.style.visibility = 'hidden'; // Cacher le bouton de déconnexion
            }

            // Ajouter un gestionnaire d'événement pour le bouton de déconnexion
            logoutBtn.addEventListener('click', function(event) {
                event.preventDefault(); // Prévenir le comportement par défaut du lien
                localStorage.removeItem('isLoggedIn'); // Supprimer l'élément du local storage
                window.location.reload(); // Recharger la page
            });
        } else {
            console.error('Les boutons avec les IDs "login-btn" ou "logout-btn" n\'ont pas été trouvés.');
        }
    });

});
