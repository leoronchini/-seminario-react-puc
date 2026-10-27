import Cabecalho from './components/Cabecalho.jsx'
import Filme from './components/Filme.jsx'

export default function App() {
  return (
    <>
      <Cabecalho />

      <main className="lista">
        <Filme titulo="Interestelar" ano={2014} imagem="interestelar.jpg" />
        <Filme titulo="Parasita" ano={2019} imagem="parasita.png" />
        <Filme titulo="Matrix" ano={1999} imagem="matrix.png" />
      </main>
    </>
  )
}
