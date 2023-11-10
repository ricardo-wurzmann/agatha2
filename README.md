# agatha2

O backend do projeto Agatha2 é estruturado em três componentes principais:

    Web Scraping:
        O script Scrapping.ipynb é responsável pelo scraping dos dados. Inicialmente, instala as dependências necessárias para navegação e extração de dados web. O script conecta-se a um banco de dados SQLite, criando-o se não existir, com uma tabela contendo colunas para matéria, submatéria, enunciado da questão e cinco alternativas de resposta. Navega até o site da Agatha e itera sobre as matérias disponíveis, removendo propagandas via pyautogui. Para cada matéria, acessa as submatérias e extrai o conteúdo das questões, armazenando-as na base de dados, evitando duplicatas.

    Limpeza da Base de Dados:
        O arquivo melhorando_database.js é utilizado para limpar e organizar a base de dados. Possui dois scripts: um para remover números entre parênteses (que indicam a quantidade de questões no site original) e outro para assegurar que todas as matérias estejam formatadas corretamente em linhas únicas na base de dados, otimizando a disponibilização via API.

    API:
        app.js é o arquivo que configura a API para interagir com a base de dados. Dispõe de quatro endpoints que retornam, respectivamente, todas as matérias, submatérias de uma matéria específica, questões de uma submatéria e um conjunto aleatório de cinco questões de uma submatéria.


Instruções de Execução:
    Clone o repositório.
    Navegue até o diretório do backend e execute: node app.js.
    Inicie o frontend para visualizar a aplicação.