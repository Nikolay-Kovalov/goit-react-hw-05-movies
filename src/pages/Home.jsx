import { FilmList } from "components/FilmList/FilmList"
import { PageTitle } from "components/PageTitle/PageTitle"
import { getMovies } from "filmApi"
import { useState } from "react"
import { useEffect } from "react"


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchMoviesList = () => {
      setLoader(true);
      getMovies()
        .then(results => {
          setMovies(results)
        })
        .catch(error => {
          setError('Sorry! Something went wrong. Try a little bit later')
        })
        .finally(setLoader(false))

    }
    fetchMoviesList()
  }, [])

  return (
    <main>
      <PageTitle text={'Trending movies'} />
      {loader && <p>Loading...</p>}
      {error && <div>{error}</div>}
      {movies && <FilmList films={movies} />}
    </main>
  )
}

export default Home;