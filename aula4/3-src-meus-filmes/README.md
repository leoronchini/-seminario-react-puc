# Passo 3 da aula 4: meus filmes

Parte do passo 2 (`2-src-com-pesquisa/`) e acrescenta a **Minha lista**: um botão em cada filme para adicioná-lo à lista de filmes preferidos do aluno, e uma aba para ver e avaliar só esses filmes. A lista fica salva no navegador.

## O que mudou no código

- Novo arquivo `hooks/useArmazenado.js`: funciona como o `useState`, mas guarda o valor no navegador (`localStorage`). Quando a página é recarregada, o valor volta.
- Novo arquivo `hooks/useMinhaLista.js`: guarda os filmes da lista usando o `useArmazenado`. Devolve `minhaLista`, `estaNaLista(id)` e `alternar(filme)`, que adiciona o filme se ele não está na lista e remove se já está.
- Novo arquivo `components/Abas.jsx`: os botões **Catálogo** e **Minha lista (N)**, com a quantidade de filmes da lista.
- `components/Filme.jsx`: recebe `naLista` e `onAlternarLista` e ganha o botão **Adicionar à minha lista** (ou **Remover da minha lista**, se o filme já está na lista).
- `hooks/useNotas.js`: o `useState` das notas vira `useArmazenado('avaliador-notas', {})`. O resto continua igual, mas agora as notas também ficam salvas no navegador.
- `App.jsx`:
  - importa o `useMinhaLista` e o `Abas`;
  - guarda qual aba está aberta (`aba`);
  - `lista` passa a ser o catálogo (resultados da pesquisa ou lista inicial) na aba **Catálogo**, e `minhaLista` na aba **Minha lista**;
  - o campo de busca e as mensagens de carregando, de erro e de "Nenhum filme encontrado." aparecem só no catálogo;
  - na aba **Minha lista** vazia, aparece "Sua lista está vazia. Adicione filmes pelo catálogo.";
  - cada `<Filme />` recebe `naLista` e `onAlternarLista`.
- `index.css`: duas regras novas, `.aba.ativa` e `.botao-lista.ativo`, só para deixar em negrito a aba aberta e o botão de um filme que já está na lista.
- `services/omdb.js`, `hooks/useFilmes.js`, `hooks/usePesquisa.js`, `components/Busca.jsx`, `Cabecalho.jsx`, `Avaliacao.jsx` e o `main.jsx` continuam iguais.

## O que mudou na tela

- Aparecem as abas **Catálogo** e **Minha lista (0)** abaixo do título.
- Cada filme ganha o botão **Adicionar à minha lista**. Ao clicar, o texto vira **Remover da minha lista** e o número na aba aumenta.
- Na aba **Minha lista** aparecem só os filmes adicionados, cada um com a barra de nota. O resumo ("X de Y avaliados") conta só os filmes da lista.
- É possível adicionar também filmes que vieram da pesquisa. Eles continuam na lista depois de limpar a pesquisa.
- A lista e as notas ficam salvas no navegador: ao recarregar a página, elas continuam lá. Se o aluno limpar os dados do navegador, elas somem.
