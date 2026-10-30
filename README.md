# Curso de React: PUC Minas Poços de Caldas

Material do curso de **React** para o **2º período do curso de Ciência da Computação** da **PUC Minas, campus Poços de Caldas**.

Ao longo das aulas construímos um mesmo projeto, o **Avaliador de Filmes**: primeiro com HTML, CSS e JavaScript puro, depois refeito em React, para deixar clara a diferença entre as duas abordagens.

##Conteúdo
Na raiz desse repositorio se encontra o arquivo seminarios-react.pdf, com todo o material apresentado em aula

## Tecnologias e ferramentas

O projeto usa **HTML**, **CSS** e **JavaScript** (ES6+) puro na aula 1 e, a partir da aula 2, **React** com **JSX**, criado com o **Vite** e organizado em **componentes** que recebem dados por **props**. O estado é gerenciado com os **hooks** `useState` e `useEffect`, e a lógica é reaproveitada em **hooks próprios** . Os dados vêm da **API da OMDb**, consumida com **fetch**, **Promises** e **async/await**, com a chave guardada em **variáveis de ambiente** (`.env`). A lista e as notas ficam salvas no navegador com **localStorage**. O código roda em **Node.js** com **npm**, é verificado com o **oxlint** e escrito no **VS Code**, com versionamento em **Git**.

## Estrutura do repositório

| Pasta | Conteúdo |
|---|---|
| `aula1/` | Revisão de HTML, CSS e JavaScript: `filmes.html`, `estilo.css` e `script.js` |
| `aula2/` | Primeiros passos em React: projeto criado com Vite e os passos da aula (componentes e props) |
| `aula3/` | Estado em React: `useState` e hook próprio (`useNotas`) |
| `aula4/` | Consumo de API: filmes buscados na OMDb com `fetch` e `useEffect`, e pesquisa por título |
| `aula5/` | Projeto final: minha lista de filmes favoritos, notas em estrelas e CSS completo |

## Pré-requisitos

- Node.js na versão **20.19 ou mais nova** (o npm já vem junto)
- Um editor de código, como o VS Code

Para instalar o Node, veja `aula2/INSTALAR-NODE.md`.

## Como rodar

**Aula 1:** abra `aula1/filmes.html` no navegador.

**Aulas 2 a 5:** dentro da pasta da aula, instale as dependências e execute o projeto. 
Importante: as pastas dos passos estão enumeradas na ordem de criação, por exemplo `2-src-com-componentes`. O `index.html` da aula aponta para a pasta que será executada (veja abaixo).
Obs: (as aulas 4 e 5 precisam antes de uma chave da OMDb no arquivo `.env`, veja `aula4/README.md`):

```bash
cd aula2
npm install
npm run dev
```

Abra no navegador o endereço que aparecer, normalmente `http://localhost:5173`.

Nas aulas 2 a 5, o projeto executa a pasta de passo indicada no `<script>` do `index.html` da aula (por exemplo, `src="/3-src-com-props/main.jsx"`). Para ver outro passo, troque o nome da pasta nessa linha.

### Passos da aula 2 (`aula2/`)

Cada pasta de passo é uma cópia completa do anterior com uma novidade. Todos usam o array `filmes` (`id`, `titulo` e `ano`) como fonte dos dados:

1. `1-src-inicial/`: projeto inicial, criado com o Vite, conforme `SLIDE-CRIACAO.md`
2. `2-src-com-componentes/`: componentes `Cabecalho` e `Avaliacao`, com a tela idêntica à do passo 1
3. `3-src-com-props/`: o passo 2 com o componente `Filme` (que recebe `titulo` e `ano` por props) movido para um arquivo próprio

Também estão em `aula2/`:

- `INSTALAR-NODE.md`: como instalar o Node.js e o npm
- `SLIDE-CRIACAO.md`: comandos para criar o projeto React

### Passos da aula 3 (`aula3/`)

1. `1-src-com-usestate/`: o código final da aula 2 com `useState`: as notas ficam guardadas no `App.jsx`, por `id` do filme
2. `2-src-com-hook/`: o mesmo código com a lógica movida para um hook próprio, `hooks/useNotas.js`

### Passos da aula 4 (`aula4/`)

1. `1-src-com-api/`: o código final da aula 3 com 10 filmes (escolhidos pelo nome) vindos da API da OMDb, no lugar do array `filmes`, e um aviso de "carregando". É aqui que o pôster do filme entra no projeto. Precisa de uma chave gratuita da OMDb, guardada no arquivo `.env` (veja `aula4/README.md`)
2. `2-src-com-pesquisa/`: o passo anterior com um campo de busca e um botão **Buscar**, que procura filmes pelo título na OMDb só quando o botão é clicado
3. `3-src-meus-filmes/`: o passo anterior sem a lista inicial: a tela mostra só o que o aluno pesquisa ou adiciona à **Minha lista** (botão de adicionar, aba para ver e avaliar os filmes escolhidos, lista e notas salvas no navegador)

### Projeto final (`aula5/`)

- `1-src-final/`: o código final da aula 4 (pesquisa, Minha lista e notas salvas no navegador) com as **estrelas** acesas e o `index.css` completo com o visual final
