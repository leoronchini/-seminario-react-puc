import Cabecalho from './components/Cabecalho.jsx'
import Filme from './components/Filme.jsx'

const filmes = [
  { id: 1, titulo: 'Interestelar', ano: 2014, imagem: 'interestelar.jpg' },
  { id: 2, titulo: 'Parasita', ano: 2019, imagem: 'parasita.png' },
  { id: 3, titulo: 'Matrix', ano: 1999, imagem: 'matrix.png' },
]

export default function App() {
  return (
    <>
      <Cabecalho />

      <main className="lista">
        {filmes.map((filme) => (
          <Filme
            key={filme.id}
            titulo={filme.titulo}
            ano={filme.ano}
            imagem={filme.imagem}
          />
        ))}
      </main>
    </>
  )
}
