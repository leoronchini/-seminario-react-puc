# Aula 4 - Avaliador de Filmes com API

Rodar:

```
npm install
npm run dev
```

Abra o endereço que aparecer (normalmente http://localhost:5173).

A aula 4 busca os filmes na API da OMDb, então antes de rodar é preciso ter uma chave.

## Como conseguir a chave da OMDb

1. Acesse https://www.omdbapi.com/apikey.aspx
2. Escolha a opção **FREE** (1.000 requisições por dia), preencha seu e-mail e envie o formulário.
3. A chave chega por e-mail. Se o e-mail trouxer um link de ativação, clique nele.

Se o limite diário acabar, a API para de responder até o dia seguinte. Nesse caso é só gerar uma chave nova no mesmo link.

## Como usar a chave no projeto

1. Na pasta `aula4`, crie o arquivo `.env` a partir do exemplo:

```
copy .env.example .env
```

2. Abra o `.env` e troque `cole_sua_chave_aqui` pela sua chave, sem aspas e sem espaços.
3. Rode `npm run dev`. Se o servidor já estava rodando, pare com `Ctrl + C` e rode de novo: o Vite só lê o `.env` ao iniciar.

O arquivo `.env` não vai para o GitHub (está no `.gitignore`). O `.env.example` explica o limite de requisições.

## Passos da aula

Cada pasta é uma cópia completa do passo anterior com uma novidade. O primeiro passo parte do código final da aula 3 (`aula3/2-src-com-hook/`):

- `1-src-com-api/` - os filmes vêm da API da OMDb (pelo nome) no lugar do array `filmes`, com um aviso de "carregando". É aqui que o pôster do filme aparece pela primeira vez, vindo da API. Arquivos novos: `services/omdb.js` (função `buscarFilme(titulo)`, que usa a chave do `.env`) e `hooks/useFilmes.js` (busca a lista com `useEffect` e guarda filmes, erro e "carregando" em `useState`).
- `2-src-com-pesquisa/` - campo de busca com botão **Buscar**, que procura filmes pelo título na OMDb só quando o botão é clicado
- `3-src-meus-filmes/` - sem a lista inicial: a tela mostra só o que o aluno pesquisa ou adiciona à **Minha lista** (botão de adicionar, aba para ver e avaliar os filmes escolhidos, lista e notas salvas no navegador)

## Qual passo o projeto executa

O `index.html` aponta para a pasta do passo no `<script>`:

```html
<script type="module" src="/3-src-meus-filmes/main.jsx"></script>
```

Para ver outro passo, troque o nome da pasta nessa linha (por exemplo, `/1-src-com-api/main.jsx`).
