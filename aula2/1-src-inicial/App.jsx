const filmes = [
  { id: 1, titulo: 'Interestelar', ano: 2014 },
  { id: 2, titulo: 'Parasita', ano: 2019 },
  { id: 3, titulo: 'Matrix', ano: 1999 },
]

function Filme({ titulo, ano }) {
  return (
    <article className="filme">
      <h2>{titulo}</h2>
      <p>{ano}</p>
      <input type="range" min="1" max="5" />
      <p className="nota">Sem nota</p>
    </article>
  )
}

export default function App() {
  return (
    <>
      <h1>Avaliador de Filmes</h1>
      <p id="resumo">0 de {filmes.length} avaliados</p>

      <main className="lista">
        {filmes.map((filme) => (
          <Filme key={filme.id} titulo={filme.titulo} ano={filme.ano} />
        ))}
      </main>
    </>
  )
}
