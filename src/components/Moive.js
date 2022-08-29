import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Movie.module.css";
function Movie({id, title, img, summary, genres}) {
    return (
    <div className={styles.movie}>
        <img clssName={styles.img} src={img}></img>
        <h1 className={styles.title}><Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link></h1>
        {summary.length < 235 ? <p>{summary}</p> : <p>{summary.slice(0, 235)}...</p>}
        
        <ul className={styles.genres}>
            <span><b>genre: </b></span>
            {genres.map(genre => <li className={styles.genre} key={genre}>{genre}</li>)}
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