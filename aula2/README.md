# Aula 2 - Avaliador de Filmes em React

Rodar:

```
npm install
npm run dev
```

Abra o endereço que aparecer (normalmente http://localhost:5173).

Como o projeto foi criado: `SLIDE-CRIACAO.md`. Como instalar o Node: `INSTALAR-NODE.md`.

## Código inicial (`src/`)

A tela da aula 1 refeita em React, em um único arquivo:

- `App.jsx` - lista `filmes` (`id`, `titulo` e `ano`), componente `Filme` (um card, que recebe `titulo` e `ano` por props) e um card para cada filme, gerado com `.map()`
- `index.css` - o mesmo CSS da aula 1

## Passos da aula

Cada pasta é uma cópia completa do `src/` naquele passo e contém todo o código do passo anterior:

- `2-src-com-componentes/` - componentes `Cabecalho` e `Avaliacao`, com a tela idêntica
- `3-src-com-props/` - componente `Filme` (com suas props) em um arquivo próprio, `components/Filme.jsx`
- `4-src-com-imagem/` - pôster de cada filme, escolhido pelo nome do arquivo

Cada pasta tem um `README.md` com o que mudou em relação ao passo anterior.

Para usar um passo (dentro da pasta `aula2`):

```
xcopy 3-src-com-props src /E /Y /I
```
