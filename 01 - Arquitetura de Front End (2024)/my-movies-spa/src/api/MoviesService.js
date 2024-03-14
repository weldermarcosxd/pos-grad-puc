import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIES_DB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

const ObterUrl = caminho => `${BASE_URL}${caminho}?api_key=${API_KEY}`

export class MoviesService {
    static obterFilmes()
    {
        let url = ObterUrl("movie/popular");
        return axios(url);
    }

    static obterFilmePorId(id)
    {
        let url = ObterUrl(`movie/${id}`);
        return axios(url);
    }
}