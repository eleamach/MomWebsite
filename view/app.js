$(document).ready(function() {
    $("#header").load("header.html");
    $(".footer").load("footer.html"); // Correction du nom du fichier footer
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loginButton = document.getElementById('login-btn');

    if (username === 'test' && password === 'test') {
        alert('Connexion réussie');
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html';
    } else {        
        alert('Connexion refusée');
    }
}

// Ce code pour ajouter des articles peut être déplacé vers un autre fichier si nécessaire.
document.addEventListener('DOMContentLoaded', function() {
    const articles = [
        {
            title: "Titre de l'Article 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrl: "test/1.jpeg"
        },
        {
            title: "Titre de l'Article 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrl: "2.jpeg"
        },
        {
            title: "Titre de l'Article 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrl: "3.jpeg"
        }
    ];

    const container = document.getElementById('articles-container');

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        
        const img = document.createElement('img');
        img.src = article.imageUrl;
        img.alt = `Image de ${article.title}`;

        const textDiv = document.createElement('div');

        const title = document.createElement('h2');
        title.textContent = article.title;

        const content = document.createElement('p');
        content.textContent = article.content;

        textDiv.appendChild(title);
        textDiv.appendChild(content);

        articleDiv.appendChild(img);
        articleDiv.appendChild(textDiv);

        container.appendChild(articleDiv);
    });
});
