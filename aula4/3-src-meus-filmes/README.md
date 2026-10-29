# Passo 3 da aula 4: meus filmes

Parte do passo 2 (`2-src-com-pesquisa/`) e muda o foco do projeto: a tela deixa de ter uma lista inicial de filmes. O aluno **pesquisa** os filmes que quer e **adiciona à Minha lista**, que fica salva no navegador.

## O que mudou no código

**Sai a lista inicial**
- `App.jsx`: a lista `titulos` e a chamada `useFilmes(titulos)` saem, junto com as mensagens "Carregando filmes..." e de erro do carregamento inicial.
- `hooks/useFilmes.js`: o arquivo deixa de existir, porque nada mais busca filmes ao abrir a página.
- `services/omdb.js`: a função `buscarFilme` sai. Fica só a `pesquisarFilmes`.

**Entra a Minha lista**
- Novo arquivo `hooks/useArmazenado.js`: funciona como o `useState`, mas guarda o valor no navegador (`localStorage`). Quando a página é recarregada, o valor volta.
- Novo arquivo `hooks/useMinhaLista.js`: guarda os filmes da lista usando o `useArmazenado`. Devolve `minhaLista`, `estaNaLista(id)` e `alternar(filme)`, que adiciona o filme se ele não está na lista e remove se já está.
- Novo arquivo `components/Abas.jsx`: os botões **Pesquisa** e **Minha lista (N)**, com a quantidade de filmes da lista.
- `components/Filme.jsx`: recebe `naLista` e `onAlternarLista` e ganha o botão **Adicionar à minha lista** (ou **Remover da minha lista**, se o filme já está na lista).
- `hooks/useNotas.js`: o `useState` das notas vira `useArmazenado('avaliador-notas', {})`. O resto continua igual, mas agora as notas também ficam salvas no navegador.
- `App.jsx`:
  - importa o `useMinhaLista` e o `Abas`;
  - guarda qual aba está aberta (`aba`);
  - `lista` passa a ser os resultados da pesquisa (ou uma lista vazia, se ainda não houve pesquisa) na aba **Pesquisa**, e `minhaLista` na aba **Minha lista**;
  - o campo de busca e as mensagens da pesquisa aparecem só na aba **Pesquisa**;
  - antes da primeira pesquisa, aparece "Busque um filme pelo título (em inglês) para começar.";
  - na aba **Minha lista** vazia, aparece "Sua lista está vazia. Adicione filmes pela pesquisa.";
  - cada `<Filme />` recebe `naLista` e `onAlternarLista`.
- `index.css`: duas regras novas, `.aba.ativa` e `.botao-lista.ativo`, só para deixar em negrito a aba aberta e o botão de um filme que já está na lista.
- `hooks/usePesquisa.js`, `components/Busca.jsx`, `Cabecalho.jsx`, `Avaliacao.jsx` e o `main.jsx` continuam iguais.

## O que mudou na tela

- A página abre vazia, sem nenhuma requisição à API, com a mensagem para pesquisar um filme.
- Aparecem as abas **Pesquisa** e **Minha lista (0)** abaixo do título.
- Só aparecem na tela os filmes que o aluno pesquisou ou que estão na Minha lista.
- Cada filme ganha o botão **Adicionar à minha lista**. Ao clicar, o texto vira **Remover da minha lista** e o número na aba aumenta.
- Na aba **Minha lista** aparecem os filmes adicionados, cada um com a barra de nota. O resumo ("X de Y avaliados") conta só os filmes da aba aberta.
- O botão **Limpar** volta para a tela vazia da pesquisa. A Minha lista não é afetada.
- A lista e as notas ficam salvas no navegador: ao recarregar a página, elas continuam lá. Os resultados da pesquisa não ficam salvos. Se o aluno limpar os dados do navegador, a lista e as notas somem.
- A pesquisa é pelo título em inglês, como a OMDb entrega. Cada clique em **Buscar** é uma requisição, e a OMDb devolve até 10 filmes por pesquisa.
