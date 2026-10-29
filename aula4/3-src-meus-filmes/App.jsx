import { useState } from 'react'
import useFilmes from './hooks/useFilmes.js'
import usePesquisa from './hooks/usePesquisa.js'
import useMinhaLista from './hooks/useMinhaLista.js'
import useNotas from './hooks/useNotas.js'
import Cabecalho from './components/Cabecalho.jsx'
import Abas from './components/Abas.jsx'
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
  const { minhaLista, estaNaLista, alternar } = useMinhaLista()
  const [busca, setBusca] = useState('')
  const [aba, setAba] = useState('catalogo')

  const noCatalogo = aba === 'catalogo'
  const lista = noCatalogo ? resultados ?? filmes : minhaLista
  const { notas, avaliar, avaliados, media } = useNotas(lista)

  function limpar() {
    setBusca('')
    pesquisar('')
  }

  return (
    <>
      <Cabecalho avaliados={avaliados} total={lista.length} media={media} />
      <Abas atual={aba} onMudar={setAba} quantidade={minhaLista.length} />
      {noCatalogo && (
        <Busca
          valor={busca}
          onMudar={setBusca}
          onBuscar={() => pesquisar(busca)}
          onLimpar={limpar}
          buscando={pesquisando}
        />
      )}
      {noCatalogo && erro && <p>{erro}</p>}
      {noCatalogo && erroBusca && <p>{erroBusca}</p>}
      {noCatalogo && carregando && <p className="carregando">Carregando filmes...</p>}
      {noCatalogo && resultados && resultados.length === 0 && (
        <p className="vazio">Nenhum filme encontrado.</p>
      )}
      {!noCatalogo && minhaLista.length === 0 && (
        <p className="vazio">Sua lista está vazia. Adicione filmes pelo catálogo.</p>
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
            naLista={estaNaLista(filme.id)}
            onAlternarLista={() => alternar(filme)}
          />
        ))}
      </main>
    </>
  )
}
