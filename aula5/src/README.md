# Passo 1 da aula 5: catálogo

Parte do código final da aula 4 (`aula4/src/`) e passa a mostrar um catálogo com 24 filmes, em vez de 3.

Antes de rodar, veja no `README.md` da pasta `aula5` como colocar a chave no arquivo `.env`.

## O que mudou no código

- `App.jsx`:
  - a lista `ids` deixa de ter 3 códigos e passa a ter 24, um por linha, com o nome do filme em um comentário (os 3 primeiros continuam sendo Interestelar, Parasita e Matrix);
  - `useFilmes(ids)` agora também devolve `carregando`;
  - enquanto os filmes não chegam, aparece o texto "Carregando filmes...".
- `hooks/useFilmes.js`:
  - novo estado `carregando`, que começa como `true`;
  - um `.finally()` no fim da busca muda `carregando` para `false`, tenha dado certo ou errado;
  - devolve `filmes`, `erro` e `carregando`.
- `index.css`: nova linha `flex-wrap: wrap` em `.lista`, para os cards quebrarem de linha.
- `services/omdb.js`, `hooks/useNotas.js`, os componentes e o `main.jsx` continuam iguais.

## O que mudou na tela

- Em vez de 3 filmes, aparecem 24, em várias linhas, com pôster, título em inglês e ano.
- O resumo mostra o total do catálogo: "0 de 24 avaliados".
- A avaliação por nota e a média continuam funcionando para qualquer filme.
- Enquanto carrega, aparece "Carregando filmes...".
- Cada abertura da página faz 24 requisições à OMDb (48 no modo de desenvolvimento do React). O limite da chave grátis é de 1.000 por dia.
