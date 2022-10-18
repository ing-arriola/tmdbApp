import styled from 'styled-components';
import { MovieResult } from '../api/Apitypes';
import { imagesUrl } from '../api/Api';

interface MovieCardProps extends MovieResult {
  onMovieClick: (id: number) => void;
}

export const MovieCard = ({
  title,
  backdrop_path,
  overview,
  release_date,
  vote_average,
  id,
  onMovieClick,
}: MovieCardProps) => {
  return (
    <Card onClick={() => onMovieClick(id)}>
      <Image src={`${imagesUrl}${backdrop_path}`} alt={title} />

      <h4>{title}</h4>
      <Overview>{overview}</Overview>
      <p>Read More</p>
      <CardFooter>
        <p>{release_date}</p>
        <p>{vote_average * 10} %</p>
      </CardFooter>
    </Card>
  );
};

const Card = styled.article`
  display: grid;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0 0.2rem 0.3rem #ccc;
  p,
  h4 {
    margin: 0.5rem 0.2rem;
  }
  :hover {
    transform: scale(1.02);
    transition: all 0.3s linear;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
    background: linear-gradient(
      to top,
      rgba(204, 203, 203, 0.62) 0%,
      rgba(71, 71, 71, 0.832) 100%
    );
    color: white;
  }
`;

const Overview = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.3rem 2rem;
  white-space: nowrap;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`;

const Image = styled.img`
  margin: 0 auto;
  width: 100%;
`;
