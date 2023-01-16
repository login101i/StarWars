import { createContext, useEffect, useReducer, useState, ReactNode } from 'react';
import Dispatch from 'react';

interface ICharacter {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
}

export type IInitialState = {
  characters: ICharacter[];
  loading: boolean;
  error: boolean;
};

const INITIAL_STATE: IInitialState = {
  characters: [],
  loading: false,
  error: false
};

type ActionType = {
  type: 'SET_REQUEST' | 'REQUEST_SUCCESS' | 'REQUEST_FAILURE';
  payload: IInitialState;
};

const StarWarsReducer = (state: IInitialState, action: ActionType) => {
  switch (action.type) {
    case 'SET_REQUEST':
      return {
        characters: [],
        loading: true,
        error: false
      };
    case 'REQUEST_SUCCESS':
      return {
        characters: action.payload.characters,
        loading: false,
        error: false
      };
    case 'REQUEST_FAILURE':
      return {
        characters: [],
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

type StarWarsContextProps = {
  children: ReactNode;
};

export const StarWarsContext = createContext<IInitialState>(INITIAL_STATE);

export const StarWarsContextProvider = ({ children }: StarWarsContextProps) => {
  const [state, dispatch] = useReducer(StarWarsReducer, INITIAL_STATE);

  return (
    <StarWarsContext.Provider
      value={{
        characters: state.characters,
        loading: state.loading,
        error: state.error
      }}
    >
      {children}
    </StarWarsContext.Provider>
  );
};
