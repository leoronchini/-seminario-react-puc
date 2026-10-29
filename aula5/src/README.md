# Aula 5: projeto final

Parte do código final da aula 4 (`aula4/2-src-com-pesquisa/`) e acrescenta, de uma vez só: a **Minha lista**, as **estrelas** e o **visual final** (CSS completo).

Antes de rodar, veja no `README.md` da pasta `aula5` como colocar a chave no arquivo `.env`.

## O que mudou no código

**Minha lista**
- Novo arquivo `hooks/useArmazenado.js`: funciona como o `useState`, mas guarda o valor no navegador (`localStorage`). Quando a página é recarregada, o valor volta.
- Novo arquivo `hooks/useMinhaLista.js`: guarda os filmes da lista usando o `useArmazenado`. Devolve `minhaLista`, `estaNaLista(id)` e `alternar(filme)`, que adiciona o filme se ele não está na lista e remove se já está.
- Novo arquivo `components/Abas.jsx`: os botões **Catálogo** e **Minha lista (N)**, com a quantidade de filmes da lista.
- `hooks/useNotas.js`: o `useState` das notas vira `useArmazenado('avaliador-notas', {})`. O resto continua igual, mas agora as notas também ficam salvas no navegador.
- `components/Filme.jsx`: recebe `naLista` e `onAlternarLista` e ganha o botão **Adicionar à minha lista** (ou **Remover da minha lista**, se o filme já está na lista).

**Estrelas**
- Novo arquivo `components/Estrelas.jsx`: recebe a `nota` e desenha 5 estrelas (`★`). Cada estrela cuja posição é menor ou igual à nota ganha a classe `acesa`. Também tem um texto para leitores de tela ("Nota 4 de 5" ou "Sem nota").
- `components/Avaliacao.jsx`: importa o `Estrelas` e mostra `<Estrelas nota={nota} />` acima da barra de nota.

**App e estilo**
- `App.jsx`:
  - importa o `useMinhaLista` e o `Abas`;
  - guarda qual aba está aberta (`aba`);
  - `lista` passa a ser o catálogo (resultados da pesquisa ou lista inicial) na aba **Catálogo**, e `minhaLista` na aba **Minha lista**;
  - o `<Cabecalho />`, o `<Abas />` e o `<Busca />` ficam dentro de um `<header className="topo">`;
  - o campo de busca e as mensagens de carregando, de erro e de "Nenhum filme encontrado." aparecem só no catálogo;
  - na aba **Minha lista** vazia, aparece "Sua lista está vazia. Adicione filmes pelo catálogo.";
  - cada `<Filme />` recebe `naLista` e `onAlternarLista`;
  - as mensagens de erro ganham a classe `erro`.
- `index.css`: é **substituído** pelo arquivo completo, que o professor entrega pronto (o aluno só cola). Ele tem:
  - as cores em variáveis no começo do arquivo (para trocar o visual em um lugar só), com tema escuro e tema claro automático, conforme o computador do aluno;
  - o topo com título em degradê, resumo em destaque, abas em formato de pílula e campo de busca com ícone e botões;
  - o catálogo em grade, que ajusta o número de colunas à largura da tela;
  - os cards com pôster, efeito ao passar o mouse e borda dourada nos filmes que estão na minha lista;
  - as estrelas acesas com brilho dourado e a barra de nota personalizada;
  - o botão de adicionar (`+`) e de remover (`✓`) da minha lista, que fica vermelho ao passar o mouse sobre um filme já adicionado;
  - as mensagens de carregando (com ícone girando), de nenhum resultado, de lista vazia e de erro;
  - ajustes para celular e para quem prefere menos movimento.
- `services/omdb.js`, `hooks/useFilmes.js`, `hooks/usePesquisa.js`, `components/Busca.jsx`, `Cabecalho.jsx` e o `main.jsx` continuam iguais.

## O que mudou na tela

- Visual novo: tema escuro (ou claro, conforme o computador), cards em grade com pôster e layout adaptado ao celular.
- Aparecem as abas **Catálogo** e **Minha lista (0)** abaixo do título.
- Cada filme ganha o botão **Adicionar à minha lista**. Ao clicar, o texto vira **Remover da minha lista** e o número na aba aumenta.
- Na aba **Minha lista** aparecem só os filmes adicionados, cada um com a barra de nota. O resumo ("X de Y avaliados") conta só os filmes da lista.
- É possível adicionar também filmes que vieram da pesquisa. Eles continuam na lista depois de limpar a pesquisa.
- Cada filme mostra 5 estrelas acima da barra de nota. Sem nota, ficam cinzas. Ao mexer na barra, as estrelas se acendem até a nota escolhida: nota 4 acende 4 estrelas.
- A lista e as notas ficam salvas no navegador: ao recarregar a página, elas continuam lá. Se o aluno limpar os dados do navegador, elas somem.
