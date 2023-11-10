# agatha2

O bakcend foi dividido em tres frentes:

    WebScrapping:
        Ao rodar o arquivo Scrapping.ipynb, primeiro é instalado as dependências e blibliotecas necessárias para navegar e extrair os dados de uma página da internet.
        Na célula principal do código, primeiro se conecta (ou cria se não existir) uma base de dados em SQLite contendo 8 colunas (materia, submateria, texto da questao e as 5 alternativas). Em seguida, abre no google chrome o site da agatha na pagina de banco de dados e dentro do for passe por todas as 7 matereias presente. Dentro de cada matéria é tirado de forna "manual" com pyautogui (uma biblioteca que consegue posicionar o cursor em uma posição específica da tela) as propagandas que aparecer (que é com certa frequência). Já no site de cada matéria, é clicado na primeira sessão de materias e percorre todos seus paineis e todas suas submaterias, entrando na página de cada submateria. Dentro dessa página, o programa por meio da biblioteca BeautifulSoup consegue extrair e salvar o conteuda presente na pagina, então percorre todas as questões sem imagens e salva todos os enunciados ou citações dentro de uma coluna e cada opção de resposta dentro das 5 colunas seguintes do banco de dados (caso já não exista essa questão na base de dados). 

    Limpando a base de dados:
        O arquivo melhorando_database.js tem como funcioanlidade limpar a base de dados, então seu código tem dois codigos distintos. O primeiro (que está comentado) percorre cada linha da coluna materia da base de dados e remove o parenteses com numero que tem, esse número significava no site da agatha a quantidade de questões daquela materia. Esse código alterando "materia" por "submateria" faz a mesma função, uma vez que foi extraido muitas submaterias com esse adendo tambem.
        O segundo código faz com que todas as matérias tenham seu conteúdo na mesma linha da base de dados, o que interfere para estra diponível na API e consequentemente no frontend
    
    Api:
        O app.js é um arquivo que cria apis a partir da base de dados extraida. Faz 4 diferentes: uma rota para todas matérias, todas submatérias de cada matéria, todas questões de cada submatéria e outra com 5 questoes aleatórias de cada submateria.


Para rodar:
    Baixe o repositório. 
    Dentro do repositório de o seguinte comando: node app.js
    Rode o frontend e em seguida a página aparecerá completa