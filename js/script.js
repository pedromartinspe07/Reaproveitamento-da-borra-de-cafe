// Função para buscar dados do JSON
async function loadFlowerData() {
    try {
        const response = await fetch('data/flores.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
        return {};
    }
}

async function searchFlower() {
    const flowerData = await loadFlowerData();
    const searchInput = document.getElementById("flower-name").value.toLowerCase();
    const resultContainer = document.getElementById("result");
    const quantity = flowerData[searchInput];

    if (quantity) {
        resultContainer.innerHTML = `<p>Para a flor <strong>${searchInput}</strong>, a quantidade recomendada de borra de café é <strong>${quantity}</strong>.</p>`;
    } else {
        resultContainer.innerHTML = `<p>Desculpe, informações sobre a flor <strong>${searchInput}</strong> não estão disponíveis.</p>`;
    }
}

// Função para adicionar uma barra de pesquisa em todos os HTML
function createSearchBar() {
    const header = document.querySelector('header');
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" id="flower-name" placeholder="Pesquise uma flor..." oninput="searchFlower()">
        <div id="result" class="result"></div>
    `;
    header.appendChild(searchContainer);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    createSearchBar();
});
