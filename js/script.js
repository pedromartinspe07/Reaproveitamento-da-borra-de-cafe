<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pesquisa de Flores</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 0;
            background-color: #f0f0f0;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .search-container {
            text-align: center;
            margin-bottom: 20px;
        }
        .search-container input {
            padding: 10px;
            font-size: 16px;
            border-radius: 4px;
            border: 1px solid #ccc;
        }
        .search-container button {
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 4px;
            border: none;
            background-color: #28a745;
            color: white;
            cursor: pointer;
        }
        .search-container button:hover {
            background-color: #218838;
        }
        .result {
            text-align: center;
            font-size: 18px;
            color: #333;
            margin-top: 20px;
        }
        .result p {
            padding: 10px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <h1>Pesquisa de Flores</h1>
    <div class="search-container">
        <input type="text" id="flower-name" placeholder="Digite o nome da flor..." />
        <button onclick="searchFlower()">Buscar</button>
    </div>
    <div id="result" class="result"></div>

    <script>
        // Função para carregar o JSON local com os dados das flores
        async function loadFlowerData() {
            try {
                const response = await fetch('flores.json'); // Carrega o arquivo JSON
                if (!response.ok) {
                    throw new Error('Erro ao carregar o arquivo JSON');
                }
                const data = await response.json(); // Converte os dados para um objeto JS
                return data;
            } catch (error) {
                console.error('Erro ao carregar o arquivo JSON:', error);
                return {}; // Retorna um objeto vazio em caso de erro
            }
        }

        // Função para realizar a pesquisa e exibir o resultado
        async function searchFlower() {
            const flowerData = await loadFlowerData(); // Carrega os dados das flores
            const searchInput = document.getElementById("flower-name").value.trim().toLowerCase(); // Pega o valor da pesquisa e converte para minúsculo
            const resultContainer = document.getElementById("result");
            const quantity = flowerData[searchInput]; // Busca o valor no JSON

            // Exibe o resultado na página
            if (searchInput === '') {
                resultContainer.innerHTML = '<p>Por favor, insira o nome de uma flor para pesquisar.</p>';
            } else if (quantity) {
                resultContainer.innerHTML = `<p>Para a flor <strong>${capitalizeFirstLetter(searchInput)}</strong>, a quantidade recomendada de borra de café é <strong>${quantity}</strong>.</p>`;
            } else {
                resultContainer.innerHTML = `<p>Desculpe, não temos informações para a flor <strong>${capitalizeFirstLetter(searchInput)}</strong>.</p>`;
            }
        }

        // Função para capitalizar a primeira letra de uma string
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    </script>
</body>
</html>