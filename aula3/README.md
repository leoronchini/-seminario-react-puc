# Aula 3 - Avaliador de Filmes em React

Rodar:

```
npm install
npm run dev
```

Abra o endereço que aparecer (normalmente http://localhost:5173).

## Código inicial (`src/`)

É o código do passo 4 da aula 2, já com `useState`:

- `App.jsx` - lista `filmes` (a mesma da aula 2), guarda as notas por `id` com `useState` e calcula quantos filmes foram avaliados e a média
- `components/Cabecalho.jsx` - título e resumo (quantos avaliados e média)
- `components/Filme.jsx` - card de um filme, com o pôster
- `components/Avaliacao.jsx` - slider da nota e texto "Sua nota"
- `assets/` - pôsteres dos filmes
- `index.css` - o mesmo CSS da aula 2

## Pasta da aula

- `1-hook/` - cópia completa do `src/`, com a lógica do `useState` movida para um hook próprio, `hooks/useNotas.js`

Para usar (dentro da pasta `aula3`):

```
xcopy 1-hook src /E /Y /I
```
