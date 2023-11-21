import "./App.css"
import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import { useSearch } from "./hooks/useSearch"

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
    // const query = Object.fromEntries(new window.FormData(event.target))
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }
  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de peliculas</h1>
          <form onSubmit={handleSubmit} action="" className="form">
            <input
              style={{
                border: "1px solid transparent",
                borderColor: error ? "red" : "transparent",
              }}
              onChange={handleChange}
              value={search}
              name="query"
              placeholder="Avengers, Star Wars ..."
              type="text"
            />
            <button type="submit">Buscar</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </header>
      </div>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
