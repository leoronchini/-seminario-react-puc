# Passo 2: componentes

Parte do passo 1 (`1-src-inicial/`) e separa partes da tela em componentes.

## O que mudou no código

- Nova pasta `components/` com dois arquivos, feitos com linhas que já existiam no `App.jsx`:
  - `Cabecalho.jsx`: o título "Avaliador de Filmes" e o texto "0 de 3 avaliados".
  - `Avaliacao.jsx`: a barra de 1 a 5 e o texto "Sem nota".
- `App.jsx`:
  - importa `Cabecalho` e `Avaliacao`;
  - no lugar do título e do resumo, entra `<Cabecalho />`;
  - dentro do componente `Filme`, no lugar da barra e do texto "Sem nota", entra `<Avaliacao />`.
- O array `filmes`, o resto do componente `Filme`, o `.map()`, o `main.jsx` e o `index.css` continuam iguais.

No `1-src-inicial/` o resumo usava `{filmes.length}`. O `Cabecalho` ainda não recebe dados, então o 3 fica escrito direto no texto. Na aula 3 ele passa a receber o total por props.

## O que mudou na tela

Nada. A tela é idêntica à do passo 1. A mudança é só na organização do código.
