# Dashboard de Concessionárias de Energia
Este projeto é uma interface web simples que consome dados de uma API de concessionárias de energia de diferentes estados brasileiros. Ele exibe os dados em uma tabela e gráficos interativos, permitindo que o usuário selecione um estado e visualize informações sobre reclamações e prazos médios de solução das concessionárias daquele estado.

## Funcionalidades
Escolha do Estado: Na página inicial, o usuário pode selecionar o estado desejado para visualizar os dados.
Tabela de Dados: A página de tabela exibe os dados das concessionárias em uma tabela formatada, mostrando informações como município, agente, tipo de reclamação, e prazo médio de solução.
Gráficos Interativos: A página de gráficos exibe visualizações gráficas dos dados selecionados. São fornecidos gráficos de barras e de pizza.
Menu de Navegação: Todas as páginas possuem um menu lateral para navegação entre as diferentes seções do site.
### Tecnologias Utilizadas 
- HTML5: Estrutura das páginas.
- CSS3: Estilos e layout.
- JavaScript (ES6): Manipulação de dados e integração com a API.
- Chart.js: Biblioteca de gráficos para gerar visualizações dinâmicas.
   
  <div style="display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 300px; 
    border: 1px solid #ccc;">
    <img src = "https://github.com/user-attachments/assets/b83f2475-4ba7-465e-a5bb-6e22138b660a" alt= "Página inicial">
  </div>
API REST: A aplicação consome dados de uma API REST que retorna informações das concessionárias por estado.
Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

bash
Copiar código
  
  
├── index.html             # Página principal com a seleção de estado  
├── table.html             # Página de visualização dos dados em tabela  
├── charts.html            # Página de visualização dos gráficos  
├── css  
│   └── styles.css         # Arquivo de estilos CSS  
├── js  
│   ├── main.js            # Lógica da página inicial  
│   ├── table.js           # Script de carregamento e exibição de dados na tabela  
│   └── charts.js          # Script de geração de gráficos  
└── README.md              # Documentação do projeto  
  
## Como Funciona
### Página Inicial (index.html)
Na página inicial, o usuário pode selecionar um estado a partir de um menu suspenso. Após selecionar o estado, ele clica no botão Ver Dados, que o redireciona para a página de tabela com o estado escolhido passado como parâmetro na URL.

### Página de Tabela (table.html)
Nesta página, os dados das concessionárias do estado selecionado são carregados em uma tabela. O site faz uma requisição fetch para a API  
``` (http://localhost:3000/api/concessionarias/uf/{UF})```  
e filtra os dados pelo estado correspondente.

### Página de Gráficos (charts.html)
Aqui são exibidos dois gráficos principais:

- Gráfico de Barras: Mostra as reclamações recebidas e as reclamações procedentes por município.
- Gráfico de Pizza: Representa o número de reclamações recebidas por município.  
Os gráficos são gerados usando a biblioteca Chart.js.

## Como Executar Localmente
 ### Pré-requisitos
Para rodar o projeto localmente, você precisará de:

* Um servidor web local para servir os arquivos HTML, como o http-server do Node.js ou o próprio servidor local da sua IDE.
* A API REST configurada e rodando em 
``` http://localhost:3000 ``` para fornecer os dados das concessionárias.
##Passos  
1. Clone este repositório:
  
bash  
Copiar código  
``` git clone https://github.com/seu-usuario/nome-do-repositorio.git ```  
2. Navegue até o diretório do projeto:
  
bash  
Copiar código  
``` cd nome-do-repositorio ```  
3. Execute um servidor local. Se estiver usando o http-server, execute o seguinte comando:
  
bash  
Copiar código  
``` http-server . ```  
4. Certifique-se de que a API está rodando em   
``` http://localhost:3000```  
Ela deve responder a requisições no formato 
``` http://localhost:3000/api/concessionarias/uf/{UF}```  
, onde {UF} é a sigla do estado.  
  
5. Abra o navegador e vá para   
``` http://localhost:8080 ``` (ou outra porta configurada pelo servidor local) para acessar o site.
  
## Personalizando a API  
Se você precisar alterar a URL da API ou adicionar novas funcionalidades, basta editar os arquivos js/table.js e js/charts.js, substituindo a URL de fetch:  
  
javascript  
Copiar código  
``` fetch(`http://localhost:3000/api/concessionarias/uf/${state}`) ```  
  
<div style="display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 300px; 
    border: 1px solid #ccc;">
    <img src = "https://github.com/user-attachments/assets/caed6f09-f7f5-4bbb-9f9b-9776c0beba9f" alt= "Página inicial">
  </div>

  <div style="display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 300px; 
    border: 1px solid #ccc;">
    <img src = "https://github.com/user-attachments/assets/48e602b0-23b6-4fa4-b72f-baad58a932d9" alt= "Página inicial">
  </div>
## Problemas Conhecidos
- Certifique-se de que a API está rodando e acessível localmente na porta 3000, caso contrário, os dados não serão carregados nas páginas de tabela e gráficos.
- Caso algum dado esteja incorreto ou desatualizado, verifique a resposta da API para garantir que está no formato esperado.
## Melhorias Futuras
Implementar filtros adicionais, como por município ou tipo de reclamação.
Adicionar mais gráficos e tipos de visualização.
Melhorar a responsividade e acessibilidade da interface.
## Contribuindo
Sinta-se à vontade para contribuir com melhorias ou sugestões. Abra uma issue ou envie um pull request.

### Licença
Este projeto está licenciado sob a MIT License.

Agora o documento está devidamente indentado e pronto para ser publicado no GitHub.
