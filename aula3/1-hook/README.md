# Passo 2 da aula 3: hook próprio

Parte do passo anterior (`src/`) e move a lógica das notas do `App.jsx` para um hook criado por nós, o `useNotas`.

## O que mudou no código

- Novo arquivo `hooks/useNotas.js`: contém o `useState` das notas, a função `avaliar` e o cálculo de `avaliados` e `media`. Ele devolve `notas`, `avaliar`, `avaliados` e `media`.
- `App.jsx`:
  - não importa mais o `useState`;
  - importa o `useNotas` e faz `const { notas, avaliar, avaliados, media } = useNotas()`;
  - o estado, a função `avaliar` e as contas saem do `App`.
- Os componentes, os `assets/`, o array `filmes`, o `main.jsx` e o `index.css` continuam iguais.

## O que mudou na tela

Nada. A tela e o comportamento são idênticos aos do passo anterior. A mudança é que o `App` fica mais curto e a lógica das notas fica em um arquivo próprio, que pode ser reutilizado.
