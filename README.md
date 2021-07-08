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

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
