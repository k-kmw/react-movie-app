import {useState, useEffect} from "react";
import Movie from "../Moive";
import styles from "./Home.module.css"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovie = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year');
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
    }
    useEffect(() => {
    getMovie();
    }, [])
    
    return (
    <div>
        <div className={styles.container}>
            {loading ? <h1>Loading...</h1> : 
            <div>
            {movies.map(movie => 
                <Movie key={movie.id}
                id={movie.id}
                title={movie.title} 
                img={movie.medium_cover_image}
                summary={movie.summary}
                genres={movie.genres} />
            )}
            </div>
            }
        </div>
    </div>
    )    
}

export default Home;