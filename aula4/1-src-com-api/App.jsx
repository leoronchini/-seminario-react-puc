import useFilmes from './hooks/useFilmes.js'
import useNotas from './hooks/useNotas.js'
import Cabecalho from './components/Cabecalho.jsx'
import Filme from './components/Filme.jsx'

const titulos = [
  'Interstellar',
  'The Lord of the Rings: The Fellowship of the Ring',
  'The Matrix',
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'Pulp Fiction',
  'Fight Club',
  'Forrest Gump',
  'Inception',
]

export default function App() {
  const { filmes, erro, carregando } = useFilmes(titulos)
  const { notas, avaliar, avaliados, media } = useNotas()

  return (
    <>
      <Cabecalho avaliados={avaliados} total={filmes.length} media={media} />
      {erro && <p>{erro}</p>}
      {carregando && <p className="carregando">Carregando filmes...</p>}

      <main className="lista">
        {filmes.map((filme) => (
          <Filme
            key={filme.id}
            titulo={filme.titulo}
            ano={filme.ano}
            imagem={filme.imagem}
            nota={notas[filme.id]}
            onAvaliar={(nota) => avaliar(filme.id, nota)}
          />
        ))}
      </main>
    </>
  )
}
