import { useEffect, useState, MouseEvent } from 'react';
import styled from 'styled-components';

import { Movies, MovieResult } from '../features/api/Apitypes';
import { moviesApi } from '../features/api/Api';
import { MovieCard, SearchBar } from '../features/ui/';
import { useNavigate } from 'react-router-dom';
export const Home = () => {
  const [popularMovies, setpopularMovies] = useState<MovieResult[]>([]);
  const [movieToSearch, setMovieToSearch] = useState<string>('');
  const [showWordSearched, setshowWordSearched] = useState(false);
  const navigate = useNavigate();

  const getPopularMovies = async () => {
    try {
      const res = await moviesApi.get<Movies>(
        `/movie/popular?api_key=${process.env.REACT_APP_MOVIE_APP}`
      );
      setpopularMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchEvent = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      if (movieToSearch) {
        const res = await moviesApi.get<Movies>(
          `/search/movie?api_key=${process.env.REACT_APP_MOVIE_APP}&query=${movieToSearch}`
        );
        setpopularMovies(res.data.results);
        setshowWordSearched(true);
      } else {
        getPopularMovies();
        setshowWordSearched(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickMovie = (movieId: number) => {
    navigate(`/home/${movieId}`);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <main>
      <SearchBar
        movieToSearch={movieToSearch}
        setMovieToSearch={setMovieToSearch}
        onSearchEvent={onSearchEvent}
      />
      {showWordSearched && <h2>{`You searched for: ${movieToSearch}`}</h2>}
      <MoviesContainer>
        {popularMovies.map((popularMovie) => (
          <MovieCard
            onMovieClick={() => onClickMovie(popularMovie.id)}
            key={popularMovie.id}
            {...popularMovie}
          />
        ))}
      </MoviesContainer>
    </main>
  );
};

const MoviesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 3fr));
  gap: 1rem;
`;
