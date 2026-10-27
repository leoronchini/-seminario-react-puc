# Curso de React: PUC Minas Poços de Caldas

Material do curso de **React** para o **2º período do curso de Ciência da Computação** da **PUC Minas, campus Poços de Caldas**.

Ao longo das aulas construímos um mesmo projeto, o **Avaliador de Filmes**: primeiro com HTML, CSS e JavaScript puro, depois refeito em React, para deixar clara a diferença entre as duas abordagens.

## Estrutura do repositório

| Pasta | Conteúdo |
|---|---|
| `aula1/` | Revisão de HTML, CSS e JavaScript: `filmes.html`, `estilo.css` e `script.js` |
| `aula2/` | Primeiros passos em React: projeto criado com Vite e os passos da aula (componentes, props e imagem) |
| `aula3/` | Estado em React: `useState` e hook próprio (`useNotas`) |

### Passos da aula 2 (`aula2/`)

Cada pasta de passo é uma cópia completa do `src/` e contém o código do passo anterior:

1. Projeto inicial: criado com o Vite, conforme `SLIDE-CRIACAO.md`
2. `2-src-com-componentes/`: componentes `Cabecalho` e `Avaliacao`
3. `3-src-com-props/`: o card inteiro vira o componente `Filme`, com props
4. `4-src-com-imagem/`: a imagem do filme é escolhida pelo nome, por uma prop

Também estão em `aula2/`:

- `INSTALAR-NODE.md`: como instalar o Node.js e o npm
- `SLIDE-CRIACAO.md`: comandos para criar o projeto React

### Passos da aula 3 (`aula3/`)

- `1-usestate/`: as notas ficam guardadas com `useState`
- `2-hook/`: a mesma lógica movida para um hook próprio, `hooks/useNotas.js`

## Pré-requisitos

- Node.js na versão **20.19 ou mais nova** (o npm já vem junto)
- Um editor de código, como o VS Code

Para instalar o Node, veja `aula2/INSTALAR-NODE.md`.

## Como rodar

**Aula 1:** abra `aula1/filmes.html` no navegador.

**Aulas 2 e 3:** dentro da pasta da aula, instale as dependências e execute o projeto:

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
