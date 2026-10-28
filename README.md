# Curso de React: PUC Minas Poços de Caldas

Material do curso de **React** para o **2º período do curso de Ciência da Computação** da **PUC Minas, campus Poços de Caldas**.

Ao longo das aulas construímos um mesmo projeto, o **Avaliador de Filmes**: primeiro com HTML, CSS e JavaScript puro, depois refeito em React, para deixar clara a diferença entre as duas abordagens.

## Estrutura do repositório

| Pasta | Conteúdo |
|---|---|
| `aula1/` | Revisão de HTML, CSS e JavaScript: `filmes.html`, `estilo.css` e `script.js` |
| `aula2/` | Primeiros passos em React: projeto criado com Vite e os passos da aula (componentes, props e imagem) |
| `aula3/` | Estado em React: `useState` e hook próprio (`useNotas`) |
| `aula4/` | Consumo de API: filmes buscados na OMDb com `fetch` e `useEffect` |
| `aula5/` | Projeto final: catálogo de filmes, pesquisa por título e CSS completo |

### Passos da aula 2 (`aula2/`)

Cada pasta de passo é uma cópia completa do `src/` e contém o código do passo anterior. Todos usam o array `filmes` (`id`, `titulo` e `ano`) como fonte dos dados, e no passo 4 ele ganha o campo `imagem`:

1. Projeto inicial: criado com o Vite, conforme `SLIDE-CRIACAO.md`
2. `2-src-com-componentes/`: componentes `Cabecalho` e `Avaliacao`, com a tela idêntica à do `src/`
3. `3-src-com-props/`: o passo 2 com o componente `Filme` (que recebe `titulo` e `ano` por props) movido para um arquivo próprio
4. `4-src-com-imagem/`: o passo 3 mais a imagem do filme, escolhida pelo nome do arquivo por uma prop

Também estão em `aula2/`:

- `INSTALAR-NODE.md`: como instalar o Node.js e o npm
- `SLIDE-CRIACAO.md`: comandos para criar o projeto React

### Passos da aula 3 (`aula3/`)

- `src/`: o código do passo 4 da aula 2 com `useState`: as notas ficam guardadas no `App.jsx`, por `id` do filme
- `1-hook/`: o mesmo código com a lógica movida para um hook próprio, `hooks/useNotas.js`

### Passos da aula 4 (`aula4/`)

- `src/`: o código final da aula 3 com os filmes vindos da API da OMDb, no lugar do array `filmes`. Precisa de uma chave gratuita da OMDb, guardada no arquivo `.env` (veja `aula4/README.md`)

### Passos da aula 5 (`aula5/`)

- `src/`: o código final da aula 4 com um catálogo de 24 filmes e um aviso de "carregando"
- `1-pesquisa/`: o passo anterior com um campo de busca que filtra o catálogo pelo título
- `2-estilo/`: o passo anterior com classes para o CSS e o `index.css` completo, com o visual final

## Pré-requisitos

- Node.js na versão **20.19 ou mais nova** (o npm já vem junto)
- Um editor de código, como o VS Code

Para instalar o Node, veja `aula2/INSTALAR-NODE.md`.

## Como rodar

**Aula 1:** abra `aula1/filmes.html` no navegador.

**Aulas 2 a 5:** dentro da pasta da aula, instale as dependências e execute o projeto (as aulas 4 e 5 precisam antes de uma chave da OMDb no arquivo `.env`, veja `aula4/README.md`):

```bash
cd aula2
npm install
npm run dev
```

Abra no navegador o endereço que aparecer, normalmente `http://localhost:5173`.

Para usar um passo, copie a pasta dele para dentro de `src/` (no `cmd` do Windows, dentro da pasta da aula):

```bash
xcopy 3-src-com-props src /E /Y /I
```
