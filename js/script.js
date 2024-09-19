// Função para buscar dados do JSON
async function loadFlowerData() {
    try {
        const response = await fetch('data/flower.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        // Converte as chaves para minúsculas
        const normalizedData = {};
        for (const key in data) {
            normalizedData[key.toLowerCase()] = data[key];
        }
        return normalizedData;
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
        return {};
    }
}

function searchFlower() {
    const searchInput = document.getElementById("flower-name").value.toLowerCase();
    if (searchInput) {
        window.location.href = `flower.html?name=${encodeURIComponent(searchInput)}`;
    } else {
        alert('Por favor, digite o nome de uma flor para pesquisar.');
    }
}

// Função para adicionar uma barra de pesquisa na página como-fazer.html
function createSearchBar() {
    // Verifica se a barra de pesquisa já existe
    if (document.getElementById("flower-name")) return;

    if (window.location.pathname.includes('como-fazer.html')) {
        const header = document.querySelector('header');
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <input type="text" id="flower-name" placeholder="Pesquise uma flor...">
            <button id="search-button">Pesquisar</button>
        `;
        header.appendChild(searchContainer);

        // Adiciona evento de clique ao botão de pesquisa
        const searchButton = document.getElementById("search-button");
        searchButton.addEventListener("click", searchFlower);

        // Adiciona evento de 'Enter' para o campo de pesquisa
        const searchInput = document.getElementById("flower-name");
        searchInput.addEventListener("keypress", (event) => {
            if (event.key === 'Enter') {
                searchFlower();
            }
        });
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    createSearchBar();
});