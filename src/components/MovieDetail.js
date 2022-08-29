import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({img, title, year, rating, runtime, description, genres, url}) {
    return (
        <div className={styles.container}>
        <img src={img}/>
        <h1>{title}</h1>
        <h2>year: {year}   rating: {rating}   runtime: {runtime} minutes</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.genre}>
            <h3 className={styles.genre__text}>genre: </h3>
            <ul className={styles.genres}>
                {genres.map((genre)=><li className={styles.genre__item} key={genre}>{genre}</li>)}
            </ul>
        </div>
        <a href={url}>{url}</a>
        <h4><Link to={`${process.env.PUBLIC_URL}/`}>Home</Link></h4>
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