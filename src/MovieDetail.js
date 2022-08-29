import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieDetail({img, title, year, rating, runtime, description, genres, url}) {
    return (
        <div>
        <img src={img}/>
        <h1>{title}</h1>
        <h2>year: {year}   rating: {rating}   runtime: {runtime} minutes</h2>
        <p>{description}</p>
        <h3>genre</h3>
        <ul>
            {genres.map((genre)=><li key={genre}>{genre}</li>)}
        </ul>
        <a href={url}>{url}</a>
        <h4><Link to="/">Home</Link></h4>
    </div>
    )
}

MovieDetail.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired
};
export default MovieDetail;