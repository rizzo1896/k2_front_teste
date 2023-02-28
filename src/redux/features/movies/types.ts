export interface MovieState {
  value: MovieType;
  status: "idle" | "loading" | "failed";
}

export interface MovieType {
  Title: string;
  Poster: string;
  Plot: string;
  Actors: string;
  Metascore: string;
}
