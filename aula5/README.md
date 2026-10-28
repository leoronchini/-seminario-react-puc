# Aula 5 - Avaliador de Filmes (projeto final)

Rodar:

```
npm install
npm run dev
```

Abra o endereço que aparecer (normalmente http://localhost:5173).

Assim como na aula 4, o projeto busca os filmes na API da OMDb e precisa da chave no arquivo `.env`.

## Chave da OMDb

Use a mesma chave da aula 4. Se o projeto da aula 4 já tem o `.env`, copie o arquivo para a pasta `aula5`. Se não, crie o `.env` a partir do exemplo e cole a chave:

```
copy .env.example .env
```

O passo a passo para conseguir a chave está no `README.md` da pasta `aula4`. O `.env` não vai para o GitHub.

## Código inicial (`src/`)

É o código final da aula 4, agora com um catálogo de 24 filmes:

- `App.jsx` - lista `ids` com 24 filmes e a mesma tela da aula 4
- `hooks/useFilmes.js` - o mesmo hook da aula 4, que agora também avisa quando ainda está carregando
- `services/omdb.js`, `hooks/useNotas.js` e os componentes - iguais aos da aula 4
- `index.css` - o mesmo CSS, com uma linha a mais para os cards quebrarem de linha

## Passos da aula

Cada pasta é uma cópia completa do `src/` naquele passo e contém todo o código do passo anterior:

- `1-pesquisa/` - campo de busca que filtra o catálogo pelo título
- `2-estilo/` - classes para o CSS e o arquivo `index.css` completo, com o visual final

Para usar um passo (dentro da pasta `aula5`):

```
xcopy 1-pesquisa src /E /Y /I
```
