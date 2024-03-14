import { useParams } from "react-router-dom"
import { MoviesService } from "../api/MoviesService";
import { useEffect, useState } from "react";

export const DetalheDoFilme = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovies = async () => {
        var {data} = await MoviesService.obterFilmePorId(id);
        setMovie(data);
        console.log(movie);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return(
        <>
            <h1>{`${movie.id} - ${movie.title}`}</h1>
            <article>{movie.overview}</article>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
        </>
    )
}