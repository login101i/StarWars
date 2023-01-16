import { FC } from 'react';
import { IMovie } from '../../interfaces/StarWarsInterfaces';
import { MovieContainer, Label, Description, RowContainer } from './MovieList.styles';

type TMovieList = {
  movies: IMovie[];
};

const MovieListTitle = 'Title';
const MovieListReleaseDate = 'Release Date ';
const MovieListOpeningCrawn = 'Opening crawn';

export const MovieList: FC<TMovieList> = ({ movies }) => {
  console.log(movies);

  function truncateOpeningCrawn(movie: IMovie) {
    return movie.opening_crawl.slice(0, 130) + '...';
  }
  return (
    <>
      {movies.map((movie) => (
        <MovieContainer key={movie.title}>
          <RowContainer>
            <Label>{MovieListTitle} </Label>
            <Label>{movie.title}</Label>
          </RowContainer>
          <RowContainer>
            <Label>{MovieListReleaseDate} </Label>
            <Description>{movie.release_date}</Description>
          </RowContainer>
          <Label>{MovieListOpeningCrawn} </Label>
          <Description>{truncateOpeningCrawn(movie)}</Description>
        </MovieContainer>
      ))}
    </>
  );
};
