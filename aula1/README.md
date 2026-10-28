# Aula 1: Avaliador de Filmes em HTML, CSS e JavaScript

Primeira versão do projeto, feita sem React. Ela serve de base: nas próximas aulas a mesma tela é refeita em React.

## Como executar

Não precisa instalar nada. Abra o arquivo `filmes.html` no navegador (duplo clique).

## O que tem no código

- `filmes.html`: o título, o texto do resumo e os três cards de filme, escritos um a um.
- `estilo.css`: o estilo simples da página (fonte, cards lado a lado com borda).
- `script.js`: a funcionalidade. Quando o aluno mexe na barra de um filme, o JavaScript guarda a nota, mostra "Sua nota: X de 5" no card e atualiza o resumo com a quantidade de filmes avaliados e a média.

## O que aparece na tela

- Título "Avaliador de Filmes" e o texto "0 de 3 avaliados".
- Três cards lado a lado (Interestelar, Parasita e Matrix), cada um com título, ano, uma barra de 1 a 5 e o texto "Sem nota".
- Ao mexer na barra de um filme, o card mostra a nota e o resumo mostra, por exemplo, "1 de 3 avaliados - média 4.0".
