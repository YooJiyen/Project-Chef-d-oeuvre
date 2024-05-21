function saveArticle() {
    const content = document.querySelector('.text-editor').innerHTML;
    localStorage.setItem('article', content);
    document.getElementById('save-message').innerText = "Article enregistré avec succès ! 🎉";

    // Ajouter un effet de confettis
    confettis();
}

function confettis() {
    // Exemple simple d'effet de confettis en manipulant le DOM
    let confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 3000);
}

// Ajouter des styles pour les confettis dans le fichier CSS
const style = document.createElement('style');
style.innerHTML = `
    .confetti-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
    }
    .confetti {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: hsl(${Math.random() * 360}, 100%, 50%);
        animation: confetti-fall 3s linear infinite;
    }
    @keyframes confetti-fall {
        0% { transform: translateY(-100vh); opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
    }
`;
document.head.appendChild(style);
