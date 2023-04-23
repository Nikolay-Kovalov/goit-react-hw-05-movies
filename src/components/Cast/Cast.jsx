import { Text } from "components/Reviews/Reviews.styled";
import { fetchMoviesCredits } from "filmApi";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { CastList } from "./Cast.styled";

 const Cast = () => {
    const { id } = useParams();

    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchCast = async () => {
            try {
                setLoader(true)
                const response = await fetchMoviesCredits(id);
                setCast(response)
            } catch (error) { setError('Something went wrong. Please, try a little bit later') }
            finally { (setLoader(false)) }
        }
        fetchCast()
    },[id])
    return (<>
        {loader && <p>Loading...</p>}
        {error && <div>{error}</div>}
        <CastList>
            {cast.map(item => {
                return (
                    <li key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt={item.name} />
                        <div>
                            <Text>Name: {item.name}</Text>
                            <Text>Character:   {item.character}</Text>
                        </div>
                    </li>
                )
            })}
        </CastList>
    </>
   
    )
 }

export default Cast;