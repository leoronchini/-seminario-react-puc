import Avaliacao from './Avaliacao.jsx'

export default function Filme({ titulo, ano, imagem }) {
  const caminho = new URL(`../assets/${imagem}`, import.meta.url).href

  return (
    <article className="filme">
      <img src={caminho} alt={`Pôster de ${titulo}`} width="160" />
      <h2>{titulo}</h2>
      <p>{ano}</p>
      <Avaliacao />
    </article>
  )
}
