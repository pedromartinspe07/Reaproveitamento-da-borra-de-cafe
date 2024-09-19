<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Como Fazer em Casa</title>
    <style>
        /* Estilos Gerais do Site */
        body {
            font-family: 'Georgia', serif;
            margin: 0;
            padding: 0;
            background: #f4f4f4; /* Background da página */
            text-align: center; /* Centraliza o texto de todo o corpo */
        }

        .container {
            width: 90%;
            margin: 0 auto;
            padding: 0 10px; /* Adiciona espaçamento lateral */
        }

        /* Cabeçalho */
        header {
            background: #333;
            color: #fff;
            padding: 10px;
            text-align: center; /* Alinha o texto no centro do cabeçalho */
        }

        header .logo-container {
            margin-bottom: 10px; /* Adiciona um espaçamento abaixo do logo */
        }

        header .logo-icon {
            height: 50px;
        }

        /* Navegação */
        nav {
            margin: 20px 0; /* Adiciona espaçamento em cima e embaixo da navegação */
        }

        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center; /* Centraliza os itens da navegação */
        }

        nav ul li {
            margin: 5px 10px; /* Ajusta o espaçamento entre os itens */
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
        }

        /* Barra de Pesquisa */
        .search-container {
            margin: 20px 0; /* Adiciona espaçamento acima e abaixo da barra de pesquisa */
        }

        .search-container input[type="text"] {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            outline: none; /* Remove o contorno padrão do navegador */
            font-size: 16px; /* Ajusta o tamanho da fonte */
            width: calc(100% - 22px); /* Ajusta a largura do input */
            max-width: 400px; /* Limita a largura máxima do input */
        }

        .search-container button {
            padding: 8px 16px;
            border: none;
            background: #555;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px; /* Ajusta o tamanho da fonte */
        }

        /* Estilo para Gráficos */
        .graph-container {
            display: flex;
            flex-direction: column;
            align-items: center; /* Centraliza os gráficos */
            margin: 20px 0;
        }

        .graph {
            width: 100%;
            max-width: 600px;
            border: 2px solid #ccc;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin: 10px; /* Adiciona uma margem para melhor espaçamento */
        }

        .graph img {
            width: 100%;
            border-bottom: 2px solid #ccc;
            display: block; /* Garante que a imagem ocupe toda a largura disponível */
            margin: 0 auto; /* Centraliza a imagem horizontalmente */
        }

        .graph h2 {
            font-size: 1.5em;
            padding: 10px;
            margin: 0;
            background-color: #f4f4f4;
            border-bottom: 2px solid #ccc;
        }

        /* Seções principais */
        .main-content {
            background-color: #fff; /* Cor de fundo das seções dentro do site */
            padding: 20px;
            border-radius: 8px;
            margin: 20px auto; /* Adiciona margem para centralizar a seção */
            max-width: 1200px; /* Define uma largura máxima para as seções */
        }

        /* Rodapé */
        footer {
            background: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
            position: relative; /* Garante que o rodapé fique na parte inferior da página */
            bottom: 0;
            width: 100%;
        }

        /* Consultas de Mídia para Dispositivos Móveis */
        @media only screen and (max-width: 768px) {
            .container {
                width: 95%;
            }

            .search-container input[type="text"] {
                width: calc(100% - 16px);
            }

            nav ul {
                flex-direction: column;
            }

            nav ul li {
                margin: 10px 0;
            }

            .graph {
                max-width: 100%;
                margin: 5px;
            }
        }

        @media only screen and (max-width: 480px) {
            .search-container input[type="text"] {
                font-size: 14px;
            }

            .search-container button {
                font-size: 14px;
                padding: 6px 12px;
            }

            .graph h2 {
                font-size: 1.2em;
            }
        }
    </style>
    <script>
        // Função para buscar dados do JSON
        async function loadFlowerData() {
            try {
                const response = await fetch('flores.json');
                if (!response.ok) {
                    throw new Error('Erro ao carregar o arquivo JSON');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Erro ao carregar o arquivo JSON:', error);
                return {};
            }
        }

        async function searchFlower() {
            const flowerData = await loadFlowerData();
            const searchInput = document.getElementById("flower-name").value.trim().toLowerCase();
            const resultContainer = document.getElementById("result");
            const quantity = flowerData[searchInput];

            if (quantity) {
                resultContainer.innerHTML = `<p>Para a flor <strong>${capitalizeFirstLetter(searchInput)}</strong>, a quantidade recomendada de borra de café é <strong>${quantity}</strong>.</p>`;
            } else {
                resultContainer.innerHTML = `<p>Desculpe, informações sobre a flor <strong>${capitalizeFirstLetter(searchInput)}</strong> não estão disponíveis.</p>`;
            }
        }

        // Função para capitalizar a primeira letra de uma string
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    </script>
</head>
<body>
    <header>
        <div class="logo-container">
            <img src="images/logo.png" alt="Logo Reaproveitamento da Borra de Café" class="logo-icon">
        </div>
        <h1>Como Fazer em Casa</h1>
        <nav>
            <ul>
                <li><a href="index.html">Início</a></li>
                <li><a href="introducao.html">Introdução</a></li>
                <li><a href="como-fazer.html">Como Fazer em Casa</a></li>
                <li><a href="cuidados-10-dias.html">Cuidados por 10 Dias</a></li>
                <li><a href="informacoes.html">Informações</a></li>
                <li><a href="pesquisa.html">Pesquisa</a></li>
                <li><a href="referencias.html">Referências Bibliográficas</a></li>
                <li><a href="relatorio.html">Relatório</a></li>
                <li><a href="quem-somos.html">Quem Somos</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="como-fazer" class="main-content">
            <h2>Como Fazer em Casa</h2>
            <p>Reaproveitar a borra de café é uma maneira sustentável de reduzir resíduos e aproveitar suas propriedades benéficas. A borra de café é rica em nutrientes como potássio, fósforo e magnésio, o que a torna um excelente aditivo para o solo, além de possuir propriedades esfoliantes e repelentes. A seguir, você encontrará orientações sobre como utilizar a borra de café em diferentes aplicações domésticas.</p>

            <h3>Ingredientes e Materiais Necessários</h3>
            <ul>
                <li><strong>Borra de café:</strong> Utilize a borra de café coletada após o preparo do café. Idealmente, deve ser deixada secar para prevenir mofo e facilitar o armazenamento.</li>
                <li><strong>Água:</strong> Utilizada para diluir a borra quando esta for aplicada como fertilizante ou usada em misturas.</li>
                <li><strong>Óleo essencial (opcional):</strong> Óleo essencial de citronela ou eucalipto pode ser adicionado à borra para potencializar o efeito repelente contra insetos.</li>
                <li><strong>Recipientes:</strong> Para