# Passo 2 da aula 5: pesquisa

Parte do passo anterior (`src/`) e acrescenta um campo de busca que filtra o catálogo pelo título.

## O que mudou no código

- Novo arquivo `components/Busca.jsx`: um campo de texto que recebe `valor` e `onMudar` por props. Quando o aluno digita, ele chama `onMudar` com o texto.
- `App.jsx`:
  - importa o `useState` e o `Busca`;
  - guarda o texto digitado em um estado (`busca`);
  - cria `filtrados`, a lista de filmes cujo título contém o texto digitado (sem diferenciar maiúsculas de minúsculas e ignorando espaços nas pontas);
  - mostra `<Busca valor={busca} onMudar={setBusca} />` abaixo do `<Cabecalho />`;
  - mostra o texto "Mostrando X de Y filmes";
  - mostra "Nenhum filme encontrado." quando a busca não acha nada;
  - o `.map()` passa a percorrer `filtrados` no lugar de `filmes`.
- `Cabecalho.jsx`, `Filme.jsx`, `Avaliacao.jsx`, `useFilmes.js`, `useNotas.js`, `omdb.js`, o `main.jsx` e o `index.css` continuam iguais.

## O que mudou na tela

- Aparece um campo "Buscar filme (em inglês)" abaixo do título.
- Ao digitar, só os filmes que combinam com o texto ficam na tela. Ao apagar, o catálogo volta inteiro.
- As notas dadas continuam guardadas enquanto o aluno filtra, e o resumo ("2 de 24 avaliados - média 3.0") continua contando o catálogo todo.
- A busca é pelo título em inglês, porque é assim que a OMDb entrega. Por exemplo, "city" acha *City of God*, mas "cidade" não acha nada.
