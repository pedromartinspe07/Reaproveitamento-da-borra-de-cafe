// Função para buscar dados do JSON
async function loadFlowerData() {
    try {
        const response = await fetch('data/flower.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return Object.fromEntries(Object.entries(data).map(([key, value]) => [key.toLowerCase(), value]));
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
        alert('Erro ao carregar os dados. Tente novamente mais tarde.'); // Mensagem de erro amigável
        return {};
    }
}

// Função de pesquisa
function searchFlower() {
    const searchInput = document.getElementById("flower-name").value.trim().toLowerCase();
    if (searchInput) {
        window.location.href = `flower.html?name=${encodeURIComponent(searchInput)}`;
    } else {
        alert('Por favor, insira um nome de flor para pesquisar.'); // Validação de entrada
    }
}

// Função para criar a barra de pesquisa
function createSearchBar() {
    if (window.location.pathname.includes('como-fazer.html')) {
        const header = document.querySelector('header');
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <input type="text" id="flower-name" placeholder="Pesquise uma flor...">
            <button id="search-button">🔍</button>
        `;
        header.appendChild(searchContainer);
        document.getElementById("search-button").addEventListener("click", searchFlower);
    }
}

// Função para alternar o menu
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger-menu');
    
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    menu.setAttribute('aria-hidden', !menu.classList.contains('active'));

    // Foca no primeiro item do menu se estiver ativo
    if (menu.classList.contains('active')) {
        const firstMenuItem = menu.querySelector('li a');
        if (firstMenuItem) {
            firstMenuItem.focus();
        }
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    createSearchBar();
    const hamburger = document.querySelector('.hamburger-menu');
    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleMenu();
            event.preventDefault();
        }
    });
});
