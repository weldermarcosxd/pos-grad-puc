import { useEffect, useState } from "react";
import { MainContainerStyled } from "../styles/MainContainerStyled";
import { MainContainer } from "../components/MainContainer";
import { MoviesService } from "../api/MoviesService";

export const Home = () => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        var {data} = await MoviesService.obterFilmes();
        setMovies(data.results);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <MainContainerStyled>
          <MainContainer filmes={movies} />
        </MainContainerStyled>
    )
};