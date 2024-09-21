document.addEventListener("DOMContentLoaded", () => {
    const feedElement = document.getElementById("feed");

    fetch('/archive/posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement("article");
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <a href="/archive/post/${post.id}.html">Leggi di più</a>
                `;
                feedElement.appendChild(postElement);
            });
        })
        .catch(error => console.error("Errore nel caricamento dei post:", error));
});
