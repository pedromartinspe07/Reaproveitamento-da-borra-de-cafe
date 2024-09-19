// Função para buscar dados do JSON
async function loadFlowerData() {
    try {
        const response = await fetch('data/flower.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        // Converte as chaves para minúsculas
        const lowerCaseData = {};
        for (const key in data) {
            lowerCaseData[key.toLowerCase()] = data[key];
        }
        return lowerCaseData;
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
        return {};
    }
}

function searchFlower() {
    const searchInput = document.getElementById("flower-name").value.toLowerCase();
    window.location.href = `flower.html?name=${encodeURIComponent(searchInput)}`;
}

// Função para adicionar uma barra de pesquisa na página como-fazer.html
function createSearchBar() {
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
        document.getElementById("search-button").addEventListener("click", searchFlower);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    createSearchBar();
