# Aula 2 - Avaliador de Filmes em React

Rodar:

```
npm install
npm run dev
```

Abra o endereço que aparecer (normalmente http://localhost:5173).

Como o projeto foi criado: `SLIDE-CRIACAO.md`. Como instalar o Node: `INSTALAR-NODE.md`.

## Passos da aula

Cada pasta é uma cópia completa do passo anterior com uma novidade:

- `1-src-inicial/` - a tela da aula 1 refeita em React, em um único arquivo: `App.jsx` (lista `filmes` com `id`, `titulo` e `ano`, componente `Filme` e um card para cada filme, gerado com `.map()`) e o mesmo CSS da aula 1 em `index.css`
- `2-src-com-componentes/` - componentes `Cabecalho` e `Avaliacao`, com a tela idêntica
- `3-src-com-props/` - componente `Filme` (com suas props) em um arquivo próprio, `components/Filme.jsx`

Cada pasta tem um `README.md` com o que mudou em relação ao passo anterior.

## Qual passo o projeto executa

O `index.html` aponta para a pasta do passo no `<script>`:

```html
<script type="module" src="/3-src-com-props/main.jsx"></script>
```

Para ver outro passo, troque o nome da pasta nessa linha (por exemplo, `/1-src-inicial/main.jsx`).
