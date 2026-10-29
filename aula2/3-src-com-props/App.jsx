import Cabecalho from './components/Cabecalho.jsx'
import Filme from './components/Filme.jsx'

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
          <Filme key={filme.id} 
          titulo={filme.titulo} 
          ano={filme.ano} />
        ))}
      </main>
    </>
  )
}
