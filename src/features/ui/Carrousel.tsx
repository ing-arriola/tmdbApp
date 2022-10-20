import { useRef } from 'react';
import styled from 'styled-components';
import { imagesUrl } from '../api/Api';
import { MovieResult } from '../api/Apitypes';

interface CarouselProps {
  movies: MovieResult[] | undefined;
}

export const Carrousel = ({ movies }: CarouselProps) => {
  const imagePadding = 20;
  const ImageRef = useRef<HTMLImageElement>(null);
  let scrollPerClick =
    (ImageRef.current && ImageRef.current?.clientWidth + imagePadding) ?? 0;
  let scrollAmount = 0;
  const CarrouselRef = useRef<HTMLInputElement>(null);

  const OnLeftClick = () => {
    CarrouselRef.current?.scrollTo({
      top: 0,
      left: (scrollAmount -= scrollPerClick),
      behavior: 'smooth',
    });
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
  };

  const OnRightClick = () => {
    if (CarrouselRef.current) {
      if (
        scrollAmount <
        CarrouselRef.current.scrollWidth - CarrouselRef.current.clientWidth
      ) {
        CarrouselRef.current?.scrollTo({
          top: 0,
          left: (scrollAmount += scrollPerClick),
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <Container>
      <SwitchLeftButton onClick={OnLeftClick}>{'<'}</SwitchLeftButton>
      <StyledCarrousel ref={CarrouselRef}>
        {movies &&
          movies.map((movie) => (
            <CarrouselItem>
              <SliderImg
                ref={ImageRef}
                src={`${imagesUrl}${movie.backdrop_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </CarrouselItem>
          ))}
      </StyledCarrousel>
      <SwitchRightButton onClick={OnRightClick}> {'>'} </SwitchRightButton>
    </Container>
  );
};

const SwitchLeftButton = styled.a``;
const SwitchRightButton = styled.a``;

const Container = styled.div`
  width: 100vw;
  display: flex;
  ${SwitchLeftButton},
  ${SwitchRightButton} {
    color: white;
    font-weight: bold;
    height: 250px;
    width: 4rem;
    line-height: 250px;
    font-size: 25px;
    text-align: center;
    background-color: lightgreen;
    z-index: 6;
  }
`;

const SliderImg = styled.img`
  border-radius: 0.5rem;
`;

const StyledCarrousel = styled.div`
  height: 250px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  ${SliderImg} {
    min-width: 147px;
    max-width: 147px;
    height: 200px;
    background-size: cover;
    background-color: lightgreen;
    margin: 5px 10px;
    cursor: pointer;
    transition: 0.5s ease;
    z-index: 2;
    height: 10rem;
  }
  ${SliderImg}:hover {
    transform: scale(1.2);
    z-index: 5;
  }
`;

const CarrouselItem = styled.div``;
