import { PageTitle } from "components/PageTitle/PageTitle";
import { fetchMoviesDetails } from "filmApi";
import { Suspense, useEffect } from "react";
import { useState } from "react";
import {  NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom"

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false)

    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();


    const handleClick = () => {navigate(location?.state?.from?? '/')}


    useEffect(() => {
        setLoader(true)
        fetchMoviesDetails(id)
            .then(response => {
                setMovie(response)
            })
            .catch(error => { setError('Something went wrong. Please, try a little bit later') })
        .finally(() => setLoader(false))
    }, [id]);

    return (
        <main>
            <button onClick={handleClick} style={{width: 80, height: 30, borderRadius: 8, backgroundColor: "#FA7800", color: "#f5f5f5", border: "none"}}><span style={{fontSize: 14}}>Go back</span></button>
            {movie && <PageTitle text={movie.title} />}
            {loader && <p>Loading...</p>}
            {error && <div>{error}</div>}
            {movie && (
                <div style={{display: "flex", gap: 48}}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                    </div>
 <div>                    <h3 style={{ color: "#f5f5f5" }}>{movie.title}</h3>
                    <p style={{ color: "#f5f5f5" }}>User score: {movie.popularity}</p>
                    <div>
                        <h3 style={{ color: "#f5f5f5" }}>Overview</h3>
                        <p style={{ color: "#f5f5f5" }}>{movie.overview}</p>
                    </div></div>

                </div>
            )}
            <hr />
            <div> <h2 style={{ color: "#f5f5f5" }}>Additional information</h2>
            <NavLink to={`/movies/${id}/reviews`} state={location.state}>
                <p style={{ color: "#f5f5f5" }}>Reviews</p>
            </NavLink>
            
            <NavLink to={`/movies/${id}/cast`} state={location.state}>
                <p style={{ color: "#f5f5f5" }}>Cast</p>
            </NavLink>
                <hr />
                <Suspense fallback={<div>Loading...</div>}>
            <Outlet /></Suspense></div>
   </main>
    )
}

export default MovieDetails;