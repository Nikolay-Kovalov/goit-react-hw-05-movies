import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
    trending: '/trending/movie/week',
    search: '/search/movie',
    movieDetails: '/movie',
    movieCredits: '/credits',
    reviews: '/reviews',

}

export const getMovies = async (page=1) => {
    const response = await axios.get(`${END_POINTS.trending}?page=${page}&language=en-US&include_adult=false`,
        {
            params: {
                api_key: '8234db11c162011590d14a3080848ed6', 
            }
        }
    )
    console.log(response.data.results)
    return response.data.results;
}

export const fetchMoviesByQuerry = async (query, page = 1) => {
    const response = await axios.get(`${END_POINTS.search}?page=${page}&query=${query}&language=en-US&include_adult=false`,
         {
            params: {
                api_key: '8234db11c162011590d14a3080848ed6', 
            }
        })
    return response.data.results
}

export const fetchMoviesDetails = async (id) => {
    const response = await axios.get(`${END_POINTS.movieDetails}/${id}?language=en-US`,
         {
            params: {
                api_key: '8234db11c162011590d14a3080848ed6', 
            }
        })
    return response.data
}

export const fetchMoviesCredits = async (id) => {
    const response = await axios.get(`/movie/${id}${END_POINTS.movieCredits}?language=en-US`,
         {
            params: {
                api_key: '8234db11c162011590d14a3080848ed6', 
            }
        })
    return response.data.cast
}

export const fetchMoviesreviews = async (id, page = 1) => {
    const response = await axios.get(`/movie/${id}${END_POINTS.reviews}?page=${page}&language=en-US`,
    {
            params: {
                api_key: '8234db11c162011590d14a3080848ed6', 
            }
        })
    return response.data.results
}

