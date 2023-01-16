import { FC, useState, useRef, useEffect } from 'react';
import { ICharacter, IMovie, IResponse } from '../../interfaces/StarWarsInterfaces';
import { MovieList } from '../../components/MovieList/MovieList';
import { HomePageContainer, MovieListContainer, CharacterName, LoadingDetails } from './HomePage.styles';
import axios from 'axios';
import { Loader } from '../../components/Loader/Loader';
import { CenteredMessageContainer } from '../../components/CenteredMessageContainer/CenteredMessageContainer';

type HomePageProps = {
  characters: ICharacter[];
  isLoading: boolean;
  nothingFoundMessage: string;
};

export const HomePage: FC<HomePageProps> = ({ characters, isLoading, nothingFoundMessage }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoadingDetails, setIsLoadingDetails] = useState<boolean>(false);
  const sideBarRef = useRef<HTMLDivElement>(null);
  const isShowMovieInfo = !!movies.length;
  const loadingText = 'loading details...';

  const closeOpenMenus = (e: any): void => {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setMovies([]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeOpenMenus);
  }, []);

  const handleMovieInfo = async (moviesUrls: string[]) => {
    console.log(isShowMovieInfo);
    if (isShowMovieInfo) return;
    const moviesListInfo: IMovie[] = [];
    setIsLoadingDetails(true);
    try {
      Promise.all(moviesUrls.map((movieUrl) => axios.get(movieUrl))).then(
        axios.spread((...response) => {
          response.map((res) => {
            const { title, opening_crawl, release_date } = res.data;
            const movieInfo = { title, opening_crawl, release_date };
            moviesListInfo.push(movieInfo);
          });
          setMovies(moviesListInfo);
          setIsLoadingDetails(false);
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HomePageContainer isBlur={isShowMovieInfo}>
        {isLoading ? (
          <Loader />
        ) : nothingFoundMessage ? (
          <CenteredMessageContainer> {nothingFoundMessage}</CenteredMessageContainer>
        ) : (
          characters.map((character: ICharacter) => (
            <CharacterName key={character.name} onClick={() => handleMovieInfo(character.films)}>
              {isLoadingDetails ? <LoadingDetails>{loadingText}</LoadingDetails> : character.name}
            </CharacterName>
          ))
        )}
      </HomePageContainer>
      <MovieListContainer isShowMovieInfo={isShowMovieInfo} ref={sideBarRef}>
        <MovieList movies={movies} />
      </MovieListContainer>
    </>
  );
};
