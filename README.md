# Proffy
### Projeto do Next Level Week #2 da Rocketseat

Neste projeto criamos uma plataforma de estudos chamada Proffy, ela contém 3 páginas que cumprem a função de buscar professores e cadastrá-los também. Este projeto utilizou as mais diversas tecnologias, como: HTML, CSS, JavaScript, SQL, Nodemon, Express e Nunjucks.
Também foi estudado o conceito de *mobile first* e implementado, também foi um projeto que utilizamos o *flexbox* e *grid* do CSS melhorando e facilitando ainda mais a disposição dos elementos na tela.

Este foi o resultado:
- ***Página inicial***

É uma página estática, que apresenta um design agradável e dois botões que redirecionam para outras páginas.
![](/github_prints/pagina_principal.PNG)

- ***Página para busca de profesores***

Esta página permite a filtragem de professores a partir da disciplina, dia da semana e horário, mostrando qual professor estará disponível no filtro buscado.
![](/github_prints/pagina_estudar.png)

- ***Página de cadastro***

Na página de cadastro é possível preencher todo o formulário para se cadastrar como um dos professores da plataforma. O resultado aparecerá na buscas dentro da *página de buscas*
![](/github_prints/pagina_cadastro.png)

### Como clonar o repositório?
É simples, basta utilizar o comando `git clone` dentro do diretório desejado em sua máquina e poderá ter este repositório em seu computador. 

Aqui está o comando completo:

`git clone https://github.com/allankildare/proffys-rocketseat`

### Como fazê-lo rodar em minha máquina?
Para isso, basta abrir o terminal na pasta do projeto e rodar o comando `npm install` para instalar as dependências do projeto e, logo depois, `npm run dev`. Após esses dois comandos será possível acessar a plataforma pelo navegador, a partir da porta 5000. É só digitar `localhost:5000` e lá estará.

#### Quero mudar a porta, como faço?
Para mudar a porta só será necessário fazer a edição no arquivo *server.js*, que se encontra no diretório (pasta) **src**. Após abrir o arquivo altere o parâmetro da função *listen* para a porta que deseja. Por exemplo:

`.listen(5001)` -> Para abrir na portar 5001

**Quer acompanhar os reposórios meus aqui no GitHub?** Acesse eles [clicando aqui](https://github.com/allankildare?tab=repositories)
