# Passo 4: imagem

Parte do passo 3 (`3-src-com-props/`) e acrescenta o pôster de cada filme, escolhido pelo nome do arquivo.

## O que mudou no código

- Nova pasta `assets/` com os três pôsteres: `interestelar.jpg`, `parasita.png` e `matrix.png`.
- `App.jsx`:
  - cada filme do array ganha o campo `imagem` com o nome do arquivo (por exemplo `imagem: 'matrix.png'`);
  - o `<Filme />` recebe também a prop `imagem={filme.imagem}`.
- `components/Filme.jsx`:
  - recebe a prop `imagem`;
  - monta o caminho do arquivo a partir do nome;
  - mostra a imagem com `<img>` acima do título.
- `index.css`: nova regra `.filme img` que deixa todas as imagens com o mesmo tamanho (160 x 240).
- `Cabecalho.jsx`, `Avaliacao.jsx` e o `main.jsx` continuam iguais.

## O que mudou na tela

Cada card passa a mostrar o pôster do filme acima do título. Todos os pôsteres têm o mesmo tamanho. O resto da tela continua igual.
