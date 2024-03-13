import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { MainContainer } from './components/MainContainer';
import { MainContainerStyled } from './styles/MainContainerStyled';
import { MoviesService } from './api/MoviesService';

function App() {

  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    var {data} = await MoviesService.obterFilmes();
    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <MainContainerStyled>
        <MainContainer filmes={movies} ></MainContainer>
      </MainContainerStyled>
    </div>
  );
}

export default App;
