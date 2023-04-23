import { Link } from "react-router-dom"
import { CardWrapper, FilmtName, Container, Image} from "./FilmList.styled"
import PropTypes from 'prop-types';

export const FilmList = ({films, prevLocation}) => {
    return (
        <Container>
            {films.map(({id, original_title, poster_path}) => (
                <CardWrapper key={id}>
                    <Link to={`/movies/${id}`} state={{ from: prevLocation }}>

                    <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
                     <FilmtName>{original_title}</FilmtName>
           
                    </Link>

    </CardWrapper>
))}
        </Container>
    )
}

FilmList.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            original_title: PropTypes.string.isRequired,

        })
    ).isRequired
}