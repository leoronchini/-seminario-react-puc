import logo from '../assets/cinema.svg'

export default function Cabecalho({ avaliados, total, media }) {
  return (
    <header>
      <img src={logo} alt="Logo do Avaliador de Filmes" width="64" />
      <h1>Avaliador de Filmes</h1>
      <p id="resumo">
        {avaliados} de {total} avaliados
        {avaliados > 0 && ` - média ${media.toFixed(1)}`}
      </p>
    </header>
  )
}
