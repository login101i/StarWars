export interface ICharacter {
  name: string;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string;
  mass: string;
  films: string[];
}

export interface IResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICharacter[];
  data: IResponse;
}

export interface IResults {
  results: IMovie[];
}

export interface IMovie {
  title: string;
  opening_crawl: string;
  release_date: string;
}
