import styled from 'styled-components';
import { MovieResult } from '../api/Apitypes';
import { imagesUrl } from '../api/LoginApi';

export const MovieCard = ({
  title,
  backdrop_path,
  overview,
  release_date,
  vote_average,
  id,
}: MovieResult) => {
  return (
    <Card>
      <Image src={`${imagesUrl}${backdrop_path}`} alt={title} />
      <h4>{title}</h4>
      <p>{overview}</p>
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
