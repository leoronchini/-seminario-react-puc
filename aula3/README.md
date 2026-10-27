# Aula 3 - Avaliador de Filmes em React

Rodar:

```
npm install
npm run dev
```

Abra o endereço que aparecer (normalmente http://localhost:5173).

Estrutura de `src/`:

- `App.jsx` - guarda as notas (estado) e a lista de filmes
- `components/Cabecalho.jsx` - logo, título e resumo (quantos avaliados e média)
- `components/Filme.jsx` - card de um filme
- `components/Avaliacao.jsx` - slider da nota e texto "Sua nota"
- `assets/cinema.svg` - imagem do cabeçalho (troque pela sua)
- `index.css` - o mesmo CSS da aula 1

## Pastas da aula

Cada pasta e uma copia completa do `src/`, para copiar de uma vez para dentro de `src/`:

- `1-usestate/` - guarda as notas com `useState` no `App.jsx`
- `2-hook/` - leva esse mesmo codigo para um hook proprio, `hooks/useNotas.js`

Para usar uma delas (dentro da pasta `aula3`):

```
xcopy 2-hook src /E /Y /I
```

Troque `2-hook` por `1-usestate` para ver a primeira versao.
