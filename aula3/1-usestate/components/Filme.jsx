import Avaliacao from './Avaliacao.jsx'

export default function Filme({ titulo, ano, nota, onAvaliar }) {
  return (
    <article className="filme">
      <h2>{titulo}</h2>
      <p>{ano}</p>
      <Avaliacao nota={nota} onAvaliar={onAvaliar} />
    </article>
  )
}
