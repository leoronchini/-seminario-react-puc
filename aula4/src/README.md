# Passo 1 da aula 4: consumindo a API

Parte do código final da aula 3 (`aula3/1-hook/`) e troca o array `filmes` escrito à mão por filmes buscados na API da OMDb.

Antes de rodar, siga no `README.md` da pasta `aula4` os passos para conseguir a chave e criar o arquivo `.env`.

## O que mudou no código

- Novo arquivo `services/omdb.js`: a função `buscarFilme(id)`, a única que conversa com a OMDb.
  - usa a chave do arquivo `.env` (`import.meta.env.VITE_OMDB_KEY`);
  - faz o `fetch` de um filme pelo código dele no IMDb;
  - converte a resposta para o formato que o projeto já usava (`id`, `titulo`, `ano` e `imagem`);
  - gera um erro se a OMDb responder que algo deu errado (por exemplo, chave errada).
- Novo arquivo `hooks/useFilmes.js`: um hook próprio, como o `useNotas`.
  - recebe a lista de `ids` e busca todos os filmes com `buscarFilme`, dentro de um `useEffect`;
  - guarda os filmes em um estado que começa vazio (`useState([])`);
  - guarda uma mensagem de `erro` em outro estado, caso a busca falhe;
  - devolve `filmes` e `erro`.
- `App.jsx`: o array `filmes` escrito à mão sai e o arquivo fica bem menor.
  - no lugar entra a lista `ids`, com o código de cada filme no IMDb (Interestelar, Parasita e Matrix);
  - `useFilmes(ids)` entrega os filmes e o erro;
  - o resto da tela continua como antes.
- `components/Filme.jsx`: `imagem` agora já é o endereço completo do pôster, então a linha que montava o caminho com `new URL` sai.
- A pasta `assets/` (pôsteres salvos no projeto) deixa de existir.
- `Cabecalho.jsx`, `Avaliacao.jsx`, `hooks/useNotas.js`, `main.jsx` e `index.css` continuam iguais.

## O que mudou na tela

- Os mesmos 3 filmes, agora buscados na API: título (em inglês, como a OMDb entrega), ano e pôster.
- As notas e a média continuam funcionando como na aula 3.
- Se a chave estiver errada ou ausente, aparece a mensagem de erro e nenhum filme.
