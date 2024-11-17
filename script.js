// Array de filmes (nome, gênero, avaliação)
const movies = [
    { name: "Vingadores: Ultimato", genre: "ação", rating: 8.4 },
    { name: "O Homem-Aranha: Longe de Casa", genre: "ação", rating: 7.5 },
    { name: "Vingadores: Guerra Infinita", genre: "ação", rating: 8.5 },
    { name: "O Lobo de Wall Street", genre: "comédia", rating: 8.2 },
    { name: "A Grande Aposta", genre: "comédia", rating: 7.8 },
    { name: "A Culpa é das Estrelas", genre: "romance", rating: 7.7 },
    { name: "Interestelar", genre: "ficção", rating: 8.6 },
    { name: "O Senhor dos Anéis: A Sociedade do Anel", genre: "fantasia", rating: 8.8 },
    { name: "Forrest Gump", genre: "drama", rating: 8.8 },
    { name: "A Teoria de Tudo", genre: "drama", rating: 7.7 },
];

// Função que filtra os filmes com base no gênero e na avaliação mínima
function filterMovies() {
    const genre = document.getElementById('genre').value;
    const rating = parseFloat(document.getElementById('rating').value);

    const filteredMovies = movies.filter(movie => {
        const genreMatch = genre === "all" || movie.genre === genre;
        const ratingMatch = movie.rating >= rating;
        return genreMatch && ratingMatch;
    });

    displayMovies(filteredMovies);
}

// Função que exibe os filmes na tela
function displayMovies(filteredMovies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = ""; // Limpar a lista de filmes antes de adicionar os novos

    if (filteredMovies.length === 0) {
        movieList.innerHTML = "<p>Nenhum filme encontrado com esses critérios.</p>";
    } else {
        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <h3>${movie.name}</h3>
                <p><strong>Gênero:</strong> ${movie.genre}</p>
                <p><strong>Avaliação:</strong> ${movie.rating}</p>
            `;
            movieList.appendChild(movieCard);
        });
    }
}

// Adicionar evento de clique no botão
document.getElementById('recommendButton').addEventListener('click', filterMovies);


