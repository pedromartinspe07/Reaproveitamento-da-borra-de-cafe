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

// Função para exibir os detalhes da flor
async function displayFlowerDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const flowerName = urlParams.get('name')?.toLowerCase();
    const flowerData = await loadFlowerData();
    const flower = flowerData[flowerName];
    const flowerDetailsContainer = document.getElementById('flower-details');

    if (flowerDetailsContainer) {
        if (flower && flower.nome_cientifico && flower.descricao) {
            flowerDetailsContainer.innerHTML = `
                <p>Para a flor <strong>${flowerName}</strong> (<em>${flower.nome_cientifico}</em>), a quantidade recomendada de borra de café é <strong>${flower.descricao}</strong>.</p>
            `;
        } else {
            flowerDetailsContainer.innerHTML = `<p>Desculpe, informações sobre a flor <strong>${flowerName}</strong> não estão disponíveis. Verifique a grafia e tente novamente.</p>`;
        }
    } else {
        console.error('Elemento flower-details não encontrado.');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    displayFlowerDetails();
});