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

O passo a passo para conseguir a chave, e o limite de requisições, estão no `README.md` da pasta `aula4` e no `.env.example`. O `.env` não vai para o GitHub.

## Projeto final (`src/`)

É o código final da aula 4 (`aula4/2-src-com-pesquisa/`) com a **Minha lista**, as **estrelas** e o **CSS completo**, tudo de uma vez:

- `App.jsx` - catálogo com pesquisa e abas **Catálogo** e **Minha lista**
- `hooks/useArmazenado.js` - como o `useState`, mas guarda o valor no navegador
- `hooks/useMinhaLista.js` - a lista de filmes favoritos do aluno
- `hooks/useNotas.js` - as notas, agora salvas no navegador
- `components/Abas.jsx` - os botões **Catálogo** e **Minha lista**
- `components/Filme.jsx` - card do filme, com o botão **Adicionar à minha lista**
- `components/Avaliacao.jsx` e `components/Estrelas.jsx` - barra de nota e estrelas acesas
- `index.css` - o CSS completo, com o visual final
- `hooks/useFilmes.js`, `hooks/usePesquisa.js`, `services/omdb.js`, `components/Busca.jsx` e `Cabecalho.jsx` - iguais aos da aula 4

O `src/README.md` lista tudo o que mudou em relação à aula 4.

## Onde ficam os dados

A **Minha lista** e as notas ficam salvas no próprio navegador (`localStorage`), não em um servidor. Elas continuam depois de recarregar a página, mas só existem naquele navegador e naquele computador, e somem se os dados do navegador forem apagados.
