import Cabecalho from './components/Cabecalho.jsx'
import Avaliacao from './components/Avaliacao.jsx'

const filmes = [
  { id: 1, titulo: 'Interestelar', ano: 2014 },
  { id: 2, titulo: 'Parasita', ano: 2019 },
  { id: 3, titulo: 'Matrix', ano: 1999 },
]

export default function App() {
  return (
    <>
      <Cabecalho />

      <main className="lista">
        {filmes.map((filme) => (
          <article key={filme.id} className="filme">
            <h2>{filme.titulo}</h2>
            <p>{filme.ano}</p>
            <Avaliacao />
          </article>
        ))}
      </main>
    </>
  )
}
