export default function Abas({ atual, onMudar, quantidade }) {
  return (
    <nav className="abas">
      <button
        type="button"
        className={atual === 'catalogo' ? 'aba ativa' : 'aba'}
        onClick={() => onMudar('catalogo')}
      >
        Catálogo
      </button>
      <button
        type="button"
        className={atual === 'minhaLista' ? 'aba ativa' : 'aba'}
        onClick={() => onMudar('minhaLista')}
      >
        Minha lista ({quantidade})
      </button>
    </nav>
  )
}
