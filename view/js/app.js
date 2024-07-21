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

document.addEventListener('DOMContentLoaded', function() {
    const articles = [
        {
            title: "Titre de l'Article 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrls: ["images/1.jpeg", "images/2.jpeg"]  // Tableau d'URLs d'images
        },
        {
            title: "Titre de l'Article 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrls: ["images/1.jpeg", "images/2.jpeg", "images/3.jpeg"]  // Tableau d'URLs d'images
        },
        {
            title: "Titre de l'Article 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrls: ["images/3.jpeg"]  // Tableau d'URLs d'images
        }
    ];

    const container = document.getElementById('articles-container');

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        
        // Ajout des images
        article.imageUrls.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `Image de ${article.title}`;
            articleDiv.appendChild(img);
        });

        const textDiv = document.createElement('div');

        const title = document.createElement('h2');
        title.textContent = article.title;

        const content = document.createElement('p');
        content.textContent = article.content;

        textDiv.appendChild(title);
        textDiv.appendChild(content);

        articleDiv.appendChild(textDiv);

        container.appendChild(articleDiv);
    });
});

