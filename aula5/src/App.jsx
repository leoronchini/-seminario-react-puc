import useFilmes from './hooks/useFilmes.js'
import useNotas from './hooks/useNotas.js'
import Cabecalho from './components/Cabecalho.jsx'
import Filme from './components/Filme.jsx'

const ids = [
  'tt0816692', // Interestelar
  'tt6751668', // Parasita
  'tt0133093', // Matrix
  'tt0111161', // Um Sonho de Liberdade
  'tt0068646', // O Poderoso Chefão
  'tt0468569', // Batman: O Cavaleiro das Trevas
  'tt0110912', // Pulp Fiction
  'tt0137523', // Clube da Luta
  'tt0109830', // Forrest Gump
  'tt1375666', // A Origem
  'tt0167260', // O Senhor dos Anéis: O Retorno do Rei
  'tt0076759', // Star Wars: Uma Nova Esperança
  'tt0114369', // Seven
  'tt0245429', // A Viagem de Chihiro
  'tt0172495', // Gladiador
  'tt0120815', // O Resgate do Soldado Ryan
  'tt0317248', // Cidade de Deus
  'tt0140888', // Central do Brasil
  'tt0861739', // Tropa de Elite
  'tt2380307', // Viva: A Vida é uma Festa
  'tt0114709', // Toy Story
  'tt2582802', // Whiplash
  'tt0482571', // O Grande Truque
  'tt7286456', // Coringa
]

export default function App() {
  const { filmes, erro, carregando } = useFilmes(ids)
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
