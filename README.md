# Tecnologias e Ferramentas
## /React https://pt-br.reactjs.org/docs/getting-started.html
## /Axios https://github.com/axios/axios
### Node.JS https://nodejs.org/pt-br/docs/
<<<<<<< HEAD
## Babel-loader https://www.npmjs.com/package/babel-loader
## Express https://expressjs.com/pt-br/
=======
>>>>>>> da1398e3c603a26bc2d01829a9815da38bc7d127

## ReactJS e Axios para consumir a API.
Front-end teste para criar uma aplicação web que consumisse a API do rick and morty usando algum framework JavaScript Front-End.
"Para executar o desafio de Frontend Developer, você deverá utilizar alguma framework JavaScript Frontend (Angular, VueJS, React, EmberJS, etc) que for confortável para você, seguindo o passo-a-passo para a execução, atendendo aos critérios de aceitação."

## Visualizar na página primeira página 20 cards de personagens ----- ✓ 2* Ao clicar, exibir informações detalhadas -------------------------- ✓ 3* Filtrar por nome, espécie ou status ------------------------------- ✓

## deploy heroku
Para fazer o deploy além dos pacotes do React, foi preciso instalar algumas dependências de desenvolvimento, para que o build deixe a aplicação corretamente preparada para produção. Para isso, foi usado o Babel, que é um transpilador famoso para garantir compatibilidade com todos os browsers (lembrando que aplicações React rodam no browser) e o Webpack, que é um empacotador de código, gerando um build super otimizado.
## Obs: 
Foi necessário fazer ajuste antes de subir para a Heroku. Isso porque não funciona na Heroku a publicação de um site estático, que seja simplesmente uma página HTML e um JS, que é exatamente o resultado do build de uma aplicação React.
Para contornar este problema, vamos escrever um pequeno servidor de arquivos usando Node.js + Express que entregará o conteúdo estático do ReactJS a cada requisição em nossa aplicação na Heroku.

# comando
## npm i -D webpack webpack-cli webpack-dev-server babel-loader html-loader html-webpack-plugin @babel/core @babel/preset-env @babel/preset-react

# passa a passa para deploy para heroku
## https://www.luiztools.com.br/post/como-publicar-aplicacao-reactjs-na-heroku/

## Começando
Siga os passos abaixo

## Instale as dependências
$ yarn install

## Comece o projeto
<<<<<<< HEAD
$ yarn start
=======
$ yarn start
>>>>>>> da1398e3c603a26bc2d01829a9815da38bc7d127
