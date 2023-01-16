import { FC, useState, ChangeEvent, SetStateAction, Dispatch, useRef, useEffect } from 'react';
import { HeaderContainer, HeaderInput, SearchButton } from './Header.styles';
import { ICharacter, IResponse } from '../../interfaces/StarWarsInterfaces';
import { axiosInstanceWithMapCaseMiddleware } from '../../helpers/request';

type TProps = {
  setCharacters: Dispatch<SetStateAction<ICharacter[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setNothingFoundMessage: Dispatch<SetStateAction<string>>;
};
const InputHeaderPlaceholderText = 'Search here, for example Luke Skywalker';
const ButtonHeaderText = 'Search';
const nothingFoundMessage = 'Nothing was found';

export const Header: FC<TProps> = ({ setCharacters, setIsLoading, setNothingFoundMessage }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const onSubmit = async () => {
    if (searchValue === '') return;
    setIsLoading(true);
    const characters: ICharacter[] = [];
    let response: IResponse;
    try {
      response = await axiosInstanceWithMapCaseMiddleware.get(`/people?search=${searchValue}`);
      console.log(response.data);
      if (!response.data.results.length) setNothingFoundMessage(nothingFoundMessage);
      const { name, birthYear, eyeColor, gender, hairColor, height, mass, films } = response.data.results[0];
      const characterInfo = { name, birthYear, eyeColor, gender, hairColor, height, mass, films };

      characters.push(characterInfo);
      setCharacters(characters);
      setSearchValue('');
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <HeaderContainer>
      <HeaderInput value={searchValue} placeholder={InputHeaderPlaceholderText} onChange={handleChange} ref={inputRef} />
      <SearchButton onClick={onSubmit}>{ButtonHeaderText}</SearchButton>
    </HeaderContainer>
  );
};
