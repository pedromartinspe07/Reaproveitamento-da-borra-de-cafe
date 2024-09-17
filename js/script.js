document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o evento de submit ao formulário de busca
    document.querySelector('form').addEventListener('submit', search);
});

// Função para carregar dados de flores a partir de um arquivo JSON
async function loadFlowerData() {
    try {
        const response = await fetch('flower-data.json'); // arquivo contendo dados sobre flores
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao carregar os dados de flores:', error);
        return {};
    }
}

// Função para exibir os resultados da pesquisa de flores
async function search(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    const flowerInput = document.querySelector('input[name="search"]').value.toLowerCase();
    const resultContainer = document.getElementById('result');
    const flowerData = await loadFlowerData();

    const results = Object.keys(flowerData).filter(flower => flower.toLowerCase().includes(flowerInput));

    resultContainer.innerHTML = ''; // Limpa os resultados anteriores

    if (results.length > 0) {
        resultContainer.innerHTML = '<h3>Resultados da Pesquisa:</h3>';
        results.forEach(flower => {
            resultContainer.innerHTML += `<p><strong>${flower}:</strong> ${flowerData[flower]}</p>`;
        });
    } else {
        resultContainer.innerHTML = `<p>Nenhum resultado encontrado para "<strong>${flowerInput}</strong>".</p>`;
    }
}

// Função para abrir o mapa em uma nova janela
function openMap() {
    window.open('https://www.google.com/maps', '_blank');
}

// Adiciona o evento de clique ao link do mapa
document.querySelector('a[href="https://www.google.com/maps"]').addEventListener('click', openMap);
