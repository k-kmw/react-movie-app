import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({id, title, img, summary, genres}) {
    return (
    <div>
        <img src={img}></img>
        <h1><Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link></h1>
        <p>{summary}</p>
        <ul>
            {genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
    </div>
    )
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;