# Passo 2: componentes

Parte do passo 1 (`src/`) e separa a tela em componentes.

## O que mudou no código

- Nova pasta `components/` com dois arquivos:
  - `Cabecalho.jsx`: o título "Avaliador de Filmes" e o texto "0 de 3 avaliados".
  - `Avaliacao.jsx`: a barra de 1 a 5 e o texto "Sem nota".
- `App.jsx`:
  - importa `Cabecalho` e `Avaliacao`;
  - usa `<Cabecalho />` no lugar do título e do resumo;
  - usa `<Avaliacao />` dentro de cada card;
  - o componente `Filme` do passo 1 deixa de existir: o card passa a ser escrito direto dentro do `.map()`.
- O array `filmes`, o `main.jsx` e o `index.css` continuam iguais.

## O que mudou na tela

Nada. A tela é idêntica à do passo 1. A mudança é só na organização do código.
