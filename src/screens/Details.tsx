import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Credits, MovieDetails, Movies } from '../features/api/Apitypes';
import { imagesUrl, moviesApi } from '../features/api/Api';
import { Loading, Carrousel } from '../features/ui';

export const Details = () => {
  const { movieId } = useParams();
  const [movieInfo, setmovieInfo] = useState<MovieDetails>();
  const [relatedMovies, setrelatedMovies] = useState<Movies>();
  const [movieCredits, setmovieCredits] = useState<Credits>();

  const getMovieInfo = useCallback(async () => {
    const [movieInfo, relatedMoviesInfo, credits] = await Promise.all([
      moviesApi.get<MovieDetails>(
        `/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_APP}`
      ),
      moviesApi.get<Movies>(
        `/movie/${movieId}/similar?api_key=${process.env.REACT_APP_MOVIE_APP}`
      ),
      moviesApi.get<Credits>(
        `/movie/${movieId}/credits?api_key=${process.env.REACT_APP_MOVIE_APP}`
      ),
    ]);

    console.log(credits.data);
    setmovieInfo(movieInfo.data);
    setrelatedMovies(relatedMoviesInfo.data);
    setmovieCredits(credits.data);
  }, [movieId]);

  useEffect(() => {
    getMovieInfo();
  }, [getMovieInfo]);

  return (
    <Container>
      {movieInfo ? (
        <div>
          <h3>{movieInfo.title}</h3>
          <img
            src={`${imagesUrl}${movieInfo.backdrop_path}`}
            alt={movieInfo.title}
          />
          <p>{movieInfo.overview}</p>
          <h3>Cast</h3>
          <GridContaier>
            {movieCredits?.cast.map((cast) => (
              <p>{cast.name}</p>
            ))}
          </GridContaier>
          <h2>Related movies</h2>
          <Carrousel movies={relatedMovies?.results} />
        </div>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

const Container = styled.main`
  text-align: center;
`;

const GridContaier = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 3fr));
  gap: 1rem;
`;
