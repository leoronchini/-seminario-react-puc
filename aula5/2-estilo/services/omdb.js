const chave = import.meta.env.VITE_OMDB_KEY

export function buscarFilme(id) {
  return fetch(`https://www.omdbapi.com/?i=${id}&apikey=${chave}`)
    .then((resposta) => resposta.json())
    .then((dados) => {
      if (dados.Response === 'False') {
        throw new Error(dados.Error)
      }

      return {
        id: dados.imdbID,
        titulo: dados.Title,
        ano: dados.Year,
        imagem: dados.Poster,
      }
    })
}
