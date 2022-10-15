import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PopularMoviesResult, PupularMovies } from '../features/api/Apitypes';
import { moviesApi } from '../features/api/LoginApi';
import { MovieCard } from '../features/ui/MovieCard';
export const Home = () => {
  const [popularMovies, setpopularMovies] = useState<PopularMoviesResult[]>([]);

  const getPopularMovies = async () => {
    try {
      console.log(process.env.REACT_APP_MOVIE_APP);
      const res = await moviesApi.get<PupularMovies>(
        `/movie/popular?api_key=${process.env.REACT_APP_MOVIE_APP}`
      );
      setpopularMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <MoviesContainer>
      {popularMovies.map((popularMovie) => (
        <MovieCard {...popularMovie} />
      ))}
    </MoviesContainer>
  );
};

const MoviesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 3fr));
  gap: 8px;
`;
