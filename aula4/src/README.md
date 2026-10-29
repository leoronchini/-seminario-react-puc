# Passo 1 da aula 4: consumindo a API

Parte do código final da aula 3 (`aula3/1-hook/`) e troca o array `filmes` escrito à mão por filmes buscados na API da OMDb, pelo nome.

Antes de rodar, siga no `README.md` da pasta `aula4` os passos para conseguir a chave e criar o arquivo `.env`.

## O que mudou no código

- Novo arquivo `services/omdb.js`: a função `buscarFilme(titulo)`, a única que conversa com a OMDb.
  - usa a chave do arquivo `.env` (`import.meta.env.VITE_OMDB_KEY`);
  - faz o `fetch` de um filme pelo nome (`?t=nome`);
  - converte a resposta para o formato que o projeto já usava (`id`, `titulo`, `ano` e `imagem`);
  - gera um erro se a OMDb responder que algo deu errado (por exemplo, filme não encontrado ou chave errada).
- Novo arquivo `hooks/useFilmes.js`: um hook próprio, como o `useNotas`.
  - recebe a lista de `titulos` e busca todos os filmes com `buscarFilme`, dentro de um `useEffect`;
  - guarda os filmes em um estado que começa vazio (`useState([])`);
  - guarda uma mensagem de `erro` em outro estado, caso a busca falhe;
  - guarda `carregando`, que começa como `true` e vira `false` no fim da busca (um `.finally()`), tenha dado certo ou errado;
  - devolve `filmes`, `erro` e `carregando`.
- `App.jsx`: o array `filmes` escrito à mão sai e o arquivo fica bem menor.
  - no lugar entra a lista `titulos`, com o nome em inglês de 10 filmes, um por linha (Interstellar, The Lord of the Rings: The Fellowship of the Ring, The Matrix e mais 7). O nome precisa estar escrito como na OMDb;
  - `useFilmes(titulos)` entrega os filmes, o erro e o `carregando`;
  - enquanto carrega, aparece o texto "Carregando filmes...". A classe `carregando` desse texto só será usada pelo CSS na aula 5;
  - o resto da tela continua como antes.
- `components/Filme.jsx`: `imagem` agora já é o endereço completo do pôster, então a linha que montava o caminho com `new URL` sai.
- `index.css`: nova linha `flex-wrap: wrap` em `.lista`, para os cards quebrarem de linha.
- A pasta `assets/` (pôsteres salvos no projeto) deixa de existir.
- `Cabecalho.jsx`, `Avaliacao.jsx`, `hooks/useNotas.js` e `main.jsx` continuam iguais.

## O que mudou na tela

- Em vez dos 3 filmes fixos, aparecem 10 filmes buscados na API, em várias linhas: título (em inglês, como a OMDb entrega), ano e pôster.
- O resumo mostra o total real: "0 de 10 avaliados".
- Enquanto a busca não termina, aparece "Carregando filmes...".
- As notas e a média continuam funcionando como na aula 3.
- Cada abertura da página faz 10 requisições à OMDb, uma por filme (20 no modo de desenvolvimento do React). O limite da chave grátis é de 1.000 por dia.
