import useFilmes from './hooks/useFilmes.js'
import useNotas from './hooks/useNotas.js'
import Cabecalho from './components/Cabecalho.jsx'
import Filme from './components/Filme.jsx'

const ids = ['tt0816692', 'tt6751668', 'tt0133093']

export default function App() {
  const { filmes, erro } = useFilmes(ids)
  const { notas, avaliar, avaliados, media } = useNotas()

  return (
    <>
      <Cabecalho avaliados={avaliados} total={filmes.length} media={media} />
      {erro && <p>{erro}</p>}

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
