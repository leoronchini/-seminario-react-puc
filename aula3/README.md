# Aula 3 - Avaliador de Filmes em React

Rodar:

```
npm install
npm run dev
```

Abra o endereço que aparecer (normalmente http://localhost:5173).

## Passos da aula

Cada pasta é uma cópia completa do passo anterior com uma novidade. O primeiro passo parte do código final da aula 2 (`aula2/3-src-com-props/`):

- `1-src-com-usestate/` - `useState`: as notas ficam guardadas no `App.jsx`, por `id` do filme. O resumo mostra quantos filmes foram avaliados e a média.
- `2-src-com-hook/` - o mesmo código com a lógica do `useState` movida para um hook próprio, `hooks/useNotas.js`.

## Qual passo o projeto executa

O `index.html` aponta para a pasta do passo no `<script>`:

```html
<script type="module" src="/2-src-com-hook/main.jsx"></script>
```

Para ver outro passo, troque o nome da pasta nessa linha (por exemplo, `/1-src-com-usestate/main.jsx`).
