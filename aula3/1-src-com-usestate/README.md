# Passo 1 da aula 3: useState

Parte do código final da aula 2 (`aula2/3-src-com-props/`) e acrescenta a funcionalidade da aula 1: avaliar os filmes.

## O que mudou no código

- `App.jsx`:
  - importa o `useState`;
  - guarda as notas em um estado (`notas`), uma nota para cada `id` de filme;
  - tem a função `avaliar(id, nota)`, que atualiza o estado;
  - calcula quantos filmes foram avaliados (`avaliados`) e a média (`media`);
  - passa esses valores para os componentes por props.
- `components/Cabecalho.jsx`: recebe `avaliados`, `total` e `media` e mostra o resumo com esses valores, no lugar do texto fixo "0 de 3 avaliados".
- `components/Filme.jsx`: recebe `nota` e `onAvaliar` e repassa para a `Avaliacao`.
- `components/Avaliacao.jsx`: a barra passa a mostrar a nota atual e chama `onAvaliar` quando o aluno mexe nela. O texto mostra a nota ou "Sem nota".
- O array `filmes`, o `main.jsx` e o `index.css` continuam iguais.

## O que mudou na tela

A tela começa igual à do passo 3 da aula 2, mas agora funciona:

- Ao mexer na barra de um filme, o card mostra "Sua nota: X de 5".
- O resumo no topo é atualizado, por exemplo "2 de 3 avaliados - média 3.0".

A barra começa no 3. Para dar nota 3, o aluno precisa mexer para outro valor e voltar.
