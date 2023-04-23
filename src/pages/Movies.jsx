import { FilmList } from "components/FilmList/FilmList";
import { PageTitle } from "components/PageTitle/PageTitle";
import { SearchBar } from "components/SearchBar/SearchBar";
import { fetchMoviesByQuerry } from "filmApi";
import { useEffect } from "react";
import { useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom"


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);

    const location = useLocation();
    const searchQuery = searchParams.get('query')

    useEffect(() => {
        if (!searchQuery) {
            return;
        }
        const fetchMovies = () => {
            setLoader(true);
            fetchMoviesByQuerry(searchQuery)
                .then(results => {
                    if (!results.length) {
                    alert('No movies found')
                    }
                    setMovies(results)
                })
                .catch(error => {
                setError('Something went wrong. Please try a little bit later')
                })
            .finally(setLoader(false))
        }
        fetchMovies()
    }, [searchQuery])
    
    const onSubmit = (value) => {
        setSearchParams({query: `${value}`})
    }

    
    return (
        <main>
            <PageTitle text={"Movie search"} />
            {loader && <p>Loading...</p>}
            {error && <div>{error}</div>}

            <SearchBar onSearch={onSubmit} />
            {movies && <FilmList films={movies} prevLocation={location} />}
          </main>
    )
}

export default Movies;