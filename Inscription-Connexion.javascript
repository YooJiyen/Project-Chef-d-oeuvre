document.getElementById("inscription-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Vérifier si le nom d'utilisateur est déjà utilisé
    if (localStorage.getItem(username)) {
        document.getElementById("inscription-error").innerText = "Ce nom d'utilisateur est déjà utilisé.";
    } else {
        // Enregistrer les informations dans le stockage local
        localStorage.setItem(username, password);
        document.getElementById("inscription-error").innerText = "";

        // Effet confettis
        confettis();
    }
});

document.getElementById("connexion-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username-login").value;
    let password = document.getElementById("password-login").value;

    // Vérifier si le nom d'utilisateur existe et si le mot de passe correspond
    if (localStorage.getItem(username) === password) {
        // Rediriger vers la page d'accueil
        window.location.href = "index.html";
    } else {
        document.getElementById("connexion-error").innerText = "Nom d'utilisateur ou mot de passe incorrect.";
    }
});

function confettis() {
    // Ajouter ici l'effet de confettis, par exemple en manipulant le DOM ou en utilisant une librairie JavaScript dédiée
}
