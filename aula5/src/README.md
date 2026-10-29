# Passo 1 da aula 5: catálogo maior

Parte do código final da aula 4 (`aula4/src/`) e aumenta o catálogo de 10 para 24 filmes.

Antes de rodar, veja no `README.md` da pasta `aula5` como colocar a chave no arquivo `.env`.

## O que mudou no código

- `App.jsx`: a lista `ids` ganha mais 14 códigos, depois dos 10 que já existiam. Os novos têm o nome do filme em um comentário, como os anteriores (de Star Wars até Coringa).
- Todo o resto continua igual: `useFilmes`, `omdb.js`, `useNotas`, os componentes, o `main.jsx` e o `index.css`.

## O que mudou na tela

- Em vez de 10 filmes, aparecem 24, em várias linhas.
- O resumo mostra o total do catálogo: "0 de 24 avaliados".
- A avaliação por nota e a média continuam funcionando para qualquer filme.
- Cada abertura da página faz 24 requisições à OMDb (48 no modo de desenvolvimento do React). O limite da chave grátis é de 1.000 por dia.
