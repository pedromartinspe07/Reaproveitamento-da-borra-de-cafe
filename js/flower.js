// Função para alternar o menu
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger-menu');
    
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    menu.setAttribute('aria-hidden', !menu.classList.contains('active'));
}

// Função para adicionar eventos ao menu
function initMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleMenu();
            event.preventDefault(); // Previne o comportamento padrão
        }
    });
}

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

// Função para exibir os detalhes da flor
async function displayFlowerDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const flowerName = urlParams.get('name')?.toLowerCase();
    const flowerData = await loadFlowerData();
    const flower = flowerData[flowerName];
    const flowerDetailsContainer = document.getElementById('flower-details');

    if (flower) {
        flowerDetailsContainer.innerHTML = `
            <p> <strong>${flowerName}</strong> (<em>${flower.nome_cientifico}</em>)<strong>${flower.descricao}</strong></p>
        `;
    } else {
        flowerDetailsContainer.innerHTML = `<p>Desculpe, informações sobre a flor <strong>${flowerName}</strong> não estão disponíveis.</p>`;
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    displayFlowerDetails();
});
