import { MouseEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { Button } from './Button';
import { InputText } from './InputText';

interface SearchBarProps {
  movieToSearch: string;
  setMovieToSearch: Dispatch<SetStateAction<string>>;
  onSearchEvent: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
}

export const SearchBar = ({
  movieToSearch,
  setMovieToSearch,
  onSearchEvent,
}: SearchBarProps) => {
  const onMovieSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieToSearch(event.target.value);
  };

  return (
    <MovieSearchFormContainer>
      <InputText
        placeHolder="Search a movie"
        value={movieToSearch}
        setValue={onMovieSearchChange}
        type="text"
        name="movieToSearch"
      />
      <Button title="Search" onClick={onSearchEvent} />
    </MovieSearchFormContainer>
  );
};

const MovieSearchFormContainer = styled.form`
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin-bottom: 1rem;
`;
