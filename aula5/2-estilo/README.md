# Passo 3 da aula 5: estilo

Parte do passo anterior (`1-pesquisa/`) e dá o visual final ao projeto: o `index.css` completo, mais duas pequenas mudanças no `App.jsx` para o CSS encontrar os elementos.

## O que mudou no código

- `App.jsx`:
  - o `<Cabecalho />` e o `<Busca />` passam a ficar dentro de um `<header className="topo">`;
  - a mensagem de erro ganha a classe `erro`: `<p className="erro">`.
- `index.css`: é **substituído** pelo arquivo completo, que o professor entrega pronto (o aluno só cola). Ele tem:
  - cores em variáveis no começo do arquivo, com tema escuro e tema claro automático (conforme o computador do aluno);
  - o topo com título em degradê, resumo em destaque e campo de busca com ícone;
  - o catálogo em grade, que ajusta o número de colunas à largura da tela;
  - os cards com pôster, efeito ao passar o mouse e barra de nota personalizada;
  - as mensagens de carregando, nenhum resultado e erro;
  - ajustes para celular.
- Os componentes, os hooks, o `omdb.js` e o `main.jsx` continuam iguais.

## O que mudou na tela

A tela tem as mesmas informações e funcionalidades do passo anterior (catálogo, notas, média e busca), mas com o visual final: tema escuro, cards em grade, efeito ao passar o mouse e layout adaptado ao celular.
