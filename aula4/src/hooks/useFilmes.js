import { useState, useEffect } from 'react'
import { buscarFilme } from '../services/omdb.js'

export default function useFilmes(ids) {
  const [filmes, setFilmes] = useState([])
  const [erro, setErro] = useState('')

  useEffect(() => {
    Promise.all(ids.map((id) => buscarFilme(id)))
      .then(setFilmes)
      .catch(() => setErro('Não foi possível carregar os filmes. Confira a chave no arquivo .env'))
  }, [ids])

  return { filmes, erro }
}
