# Passo 3: props

Parte do passo 2 (`2-src-com-componentes/`) e transforma o card inteiro em um componente que recebe dados por props.

## O que mudou no código

- Novo arquivo `components/Filme.jsx`: o card de um filme. Ele recebe `titulo` e `ano` por props e usa `<Avaliacao />` dentro dele.
- `App.jsx`:
  - importa `Filme`;
  - dentro do `.map()`, o card escrito à mão é trocado por `<Filme key={filme.id} titulo={filme.titulo} ano={filme.ano} />`.
- `Cabecalho.jsx`, `Avaliacao.jsx`, o array `filmes`, o `main.jsx` e o `index.css` continuam iguais.

## O que mudou na tela

Nada. A tela é idêntica à do passo 2. A mudança é que agora um mesmo componente (`Filme`) é reutilizado para os três filmes, mudando só os dados que recebe.
