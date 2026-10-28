export default function Busca({ valor, onMudar }) {
  return (
    <input
      type="search"
      className="busca"
      placeholder="Buscar filme (em inglês)"
      aria-label="Buscar filme pelo título em inglês"
      value={valor}
      onChange={(e) => onMudar(e.target.value)}
    />
  )
}
