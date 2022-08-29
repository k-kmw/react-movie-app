import {useState, useEffect} from "react";
import MovieDetail from "../components/MovieDetail";
import {useParams} from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const {id} = useParams();
    const getMoive = async () => {
        const response = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(response.data.movie);
        setLoading(false);
    }
    useEffect(()=> {
        getMoive();
    }, [])
    return (
        <div>
            {loading ? <h1>Loading...</h1> : <MovieDetail 
            img={movie.medium_cover_image} 
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            runtime={movie.runtime}
            description={movie.description_full}
            genres={movie.genres}
            url={movie.url}
            />
            }
        </div>
    )
}

export default Detail