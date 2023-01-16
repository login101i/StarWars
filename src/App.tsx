import { useState, FC } from 'react';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { ICharacter } from './interfaces/StarWarsInterfaces';
import { AppContainer } from './App.styles';

export const App = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nothingFoundMessage, setNothingFoundMessage] = useState<string>('');

  return (
    <AppContainer>
      <Header setCharacters={setCharacters} setIsLoading={setIsLoading} setNothingFoundMessage={setNothingFoundMessage} />
      <HomePage characters={characters} isLoading={isLoading} nothingFoundMessage={nothingFoundMessage} />
    </AppContainer>
  );
};
