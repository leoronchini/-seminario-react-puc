# Passo 1: projeto inicial

Primeiro passo da aula 2: o projeto React criado com o Vite e a tela do Avaliador de Filmes, tudo em um único arquivo.

## Como o projeto foi criado

No terminal, dentro da pasta onde o projeto vai ficar:

```bash
node -v
npm -v
npm config set strict-ssl false
npm create vite@latest
```

O terminal faz algumas perguntas (setas ↑ ↓ para escolher, Enter para confirmar):

| Pergunta | Resposta |
|---|---|
| Project name | `aula2` |
| Select a framework | `React` |
| Select a variant | `JavaScript` |
| Which linter to use? | `Oxlint` |
| Install with npm and start now? | `No` |

Depois:

```bash
cd aula2
npm install
code .
npm run dev
```

Abra no navegador o endereço que aparecer (normalmente `http://localhost:5173`). Para parar, `Ctrl + C`.

## O que tem no código

O Vite cria vários arquivos de exemplo. Aqui só mexemos em dois:

- `src/App.jsx`: o array `filmes`, o componente `Filme` (um card) e o componente `App`, que mostra o título, o resumo e a lista de cards com `.map()`.
- `src/index.css`: o estilo simples da página.

O `main.jsx` continua como o Vite criou.

## O que aparece na tela

- Título "Avaliador de Filmes" e o texto "0 de 3 avaliados".
- Três cards lado a lado (Interestelar, Parasita e Matrix), cada um com título, ano, uma barra de 1 a 5 e o texto "Sem nota".
- A barra ainda não faz nada: a nota só passa a funcionar na aula 3.
