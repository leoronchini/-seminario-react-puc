import { useState } from 'react'
import useFilmes from './hooks/useFilmes.js'
import usePesquisa from './hooks/usePesquisa.js'
import useNotas from './hooks/useNotas.js'
import Cabecalho from './components/Cabecalho.jsx'
import Busca from './components/Busca.jsx'
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
  const { resultados, pesquisando, erroBusca, pesquisar } = usePesquisa()
  const [busca, setBusca] = useState('')

  const lista = resultados ?? filmes
  const { notas, avaliar, avaliados, media } = useNotas(lista)

  function limpar() {
    setBusca('')
    pesquisar('')
  }

  return (
    <>
      <Cabecalho avaliados={avaliados} total={lista.length} media={media} />
      <Busca
        valor={busca}
        onMudar={setBusca}
        onBuscar={() => pesquisar(busca)}
        onLimpar={limpar}
        buscando={pesquisando}
      />
      {erro && <p>{erro}</p>}
      {erroBusca && <p>{erroBusca}</p>}
      {carregando && <p className="carregando">Carregando filmes...</p>}
      {resultados && resultados.length === 0 && (
        <p className="vazio">Nenhum filme encontrado.</p>
      )}

      <main className="lista">
        {lista.map((filme) => (
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
