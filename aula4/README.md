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

## Código inicial (`src/`)

É o código final da aula 3 (`aula3/1-hook/`), agora com os filmes vindos da API:

- `App.jsx` - guarda os nomes (em inglês) de 10 filmes e monta a tela com os filmes que o `useFilmes` entrega
- `services/omdb.js` - função `buscarFilme(titulo)`: busca um filme na OMDb pelo nome com `fetch`, usando a chave do `.env`
- `hooks/useFilmes.js` - hook que busca a lista de filmes com `useEffect` e guarda o resultado, o erro e o "carregando" em `useState`
- `hooks/useNotas.js` - o mesmo hook da aula 3
- `components/Cabecalho.jsx` - igual ao da aula 3
- `components/Filme.jsx` - card de um filme, com o pôster vindo da API
- `components/Avaliacao.jsx` - igual ao da aula 3
- `index.css` - o mesmo CSS da aula 3, com uma linha a mais para os cards quebrarem de linha

Os pôsteres da pasta `assets/` deixam de ser usados: as imagens agora vêm da OMDb.

## Passos da aula

Cada pasta é uma cópia completa do `src/` naquele passo e contém todo o código do passo anterior:

- `2-src-com-pesquisa/` - campo de busca com botão **Buscar**, que procura filmes pelo título na OMDb só quando o botão é clicado
- `src-meus-filmes/` - **Minha lista**: botão para adicionar filmes à lista de preferidos, aba para ver e avaliar só esses filmes, lista e notas salvas no navegador

Para usar um passo (dentro da pasta `aula4`):

```
xcopy src-meus-filmes src /E /Y /I
```
