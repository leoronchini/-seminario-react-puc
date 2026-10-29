# Passo 2 da aula 4: pesquisa

Parte do passo 1 (`src/`) e acrescenta uma pesquisa de filmes pelo título, que só consulta a API quando o aluno clica em **Buscar**.

## O que mudou no código

- `services/omdb.js`: nova função `pesquisarFilmes(texto)`, que procura filmes pelo título (`?s=texto`).
  - se a OMDb não achar nada, devolve uma lista vazia;
  - se a OMDb recusar a pesquisa (por exemplo, texto curto demais), gera um erro;
  - cada resultado vira o mesmo formato de sempre (`id`, `titulo`, `ano` e `imagem`).
- Novo arquivo `hooks/usePesquisa.js`: um hook próprio, como o `useFilmes`.
  - guarda os `resultados` da pesquisa (`null` quando não há pesquisa), se está `pesquisando` e a mensagem `erroBusca`;
  - tem a função `pesquisar(texto)`: com texto, faz **uma** requisição; com o campo vazio, só limpa os resultados e não faz requisição;
  - se der erro, mostra a mensagem e volta para a lista inicial.
- Novo arquivo `components/Busca.jsx`: um formulário com o campo de texto e os botões **Buscar** e **Limpar**. Os dois ficam desativados enquanto a pesquisa não termina ("Buscando..."), para não repetir requisições.
- `App.jsx`:
  - importa o `useState`, o `usePesquisa` e o `Busca`;
  - guarda o texto digitado em um estado (`busca`);
  - tem a função `limpar`, que esvazia o campo e volta para a lista inicial (chamando `pesquisar('')`, que não faz requisição);
  - cria `lista`, que é `resultados` quando há pesquisa e `filmes` (a lista inicial) quando não há;
  - mostra `<Busca />` abaixo do `<Cabecalho />`, a mensagem de erro da pesquisa e "Nenhum filme encontrado.";
  - o `.map()` e o total do `<Cabecalho />` passam a usar `lista` no lugar de `filmes`.
- `hooks/useNotas.js`: duas pequenas mudanças, para o resumo contar só os filmes que estão na tela.
  - passa a receber a lista de filmes: `useNotas(filmes)`;
  - a linha `const lista = Object.values(notas)` vira `const lista = filmes.filter((filme) => notas[filme.id]).map((filme) => notas[filme.id])`.
- `Cabecalho.jsx`, `Filme.jsx`, `Avaliacao.jsx`, `useFilmes.js`, o `main.jsx` e o `index.css` continuam iguais.

## O que mudou na tela

- Aparece um campo "Buscar filme (em inglês)" com os botões **Buscar** e **Limpar** abaixo do título.
- Digitar não busca nada. A pesquisa só acontece ao clicar em **Buscar** (apertar Enter dentro do campo faz o mesmo que clicar no botão). Cada clique é uma requisição à OMDb.
- A lista passa a mostrar os resultados da pesquisa: até 10 filmes, o máximo que a OMDb devolve por página. O resumo ("X de Y avaliados") conta só os filmes que estão na tela.
- Se a pesquisa não achar nada, aparece "Nenhum filme encontrado.".
- Se o texto for curto demais (por exemplo, uma letra), a OMDb recusa e aparece a mensagem de erro, com a lista inicial de volta.
- Clicar em **Buscar** com o campo vazio volta para a lista inicial, sem fazer requisição.
- O botão **Limpar** esvazia o campo, tira qualquer mensagem de erro e volta para a lista inicial, também sem fazer requisição.
- A nota dada a um filme continua guardada: se ele aparecer de novo em outra pesquisa, a nota está lá.
- A busca é pelo título em inglês, como a OMDb entrega. Por exemplo, "matrix" acha *The Matrix*, mas "senhor dos aneis" não acha nada.
