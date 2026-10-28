# Passo 3: props

Parte do passo 2 (`2-src-com-componentes/`) e leva o componente `Filme`, que recebe dados por props, para um arquivo próprio.

## O que mudou no código

- Novo arquivo `components/Filme.jsx`: a função `Filme` do `App.jsx` vem para cá sem mudanças. Ela recebe `titulo` e `ano` por props e usa `<Avaliacao />`, então o `import` da `Avaliacao` também vem junto.
- `App.jsx`:
  - a função `Filme` sai daqui;
  - importa `Filme` no lugar de `Avaliacao` (quem usa a `Avaliacao` agora é o `Filme`);
  - o `.map()` com `<Filme key={filme.id} titulo={filme.titulo} ano={filme.ano} />` continua igual.
- `Cabecalho.jsx`, `Avaliacao.jsx`, o array `filmes`, o `main.jsx` e o `index.css` continuam iguais.

## O que mudou na tela

Nada. A tela é idêntica à do passo 2. A mudança é que todos os componentes agora ficam na pasta `components/`, cada um no seu arquivo, e o mesmo `Filme` é reutilizado para os três filmes, mudando só os dados que recebe por props.
