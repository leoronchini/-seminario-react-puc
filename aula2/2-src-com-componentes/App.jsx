import Cabecalho from './components/Cabecalho.jsx'
import Avaliacao from './components/Avaliacao.jsx'

export default function App() {
  return (
    <>
      <Cabecalho />

      <main className="lista">
        <article className="filme">
          <h2>Interestelar</h2>
          <p>2014</p>
          <Avaliacao />
        </article>

        <article className="filme">
          <h2>Parasita</h2>
          <p>2019</p>
          <Avaliacao />
        </article>

        <article className="filme">
          <h2>Matrix</h2>
          <p>1999</p>
          <Avaliacao />
        </article>
      </main>
    </>
  )
}
