# Ecommerce com React

Projeto criado apenas para testes, usando [Create React App](https://github.com/facebook/create-react-app) e [JSON Server](https://github.com/typicode/json-server).

É um protótipo de uma loja de ecommerce. Possui função de login e de adicionar produtos ao carrinho de compras.

## Para instalar as dependências (package.json)

        npm install

## Para rodar o servidor JSON

a) Via Docker (recomendado):

        docker run -d -p 80:80 -v /home/user/test.json:/data/db.json --name json-server clue/json-server

Sendo `/home/user/test.json` o local em que está salvo o arquivo `test.json`. Modificar o comando caso o local do arquivo esteja diferente no seu sistema.

O servidor irá rodar na porta 80, sendo acessível pelo endereço:

        http://localhost/

Link para o repositório Docker: https://github.com/clue/docker-json-server

b) Via NPM:

Primeiro, instale o json-server via npm:

        npm install -g json-server

Depois, execute o seguinte comando para rodar o servidor:

        json-server --watch test.json

Se necessário, indicar o caminho completo onde está localizado o arquivo `test.json`.

O servidor irá rodar na porta 3000, sendo acessível pelo endereço:

        http://localhost:3000/

Por fim, altere o arquivo axios.js, localizado em `ecommerce-react\src\services\axios.js`:

        import axios from 'axios';
        
        export default axios.create({
            baseURL: 'http://localhost:3000',
        });

## Iniciando o projeto 

Primeiro, baixe as dependências do projeto e execute o JSON Server.

Depois, no terminal, insira o comando:

        npm start

Acesse [http://localhost:3000](http://localhost:3000) ou [http://localhost:3001](http://localhost:3001) para visualizar no browser.