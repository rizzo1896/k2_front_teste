import { MovieType } from "../redux/features/movies/types";

export const getMovies = async (title: string) => {
  const data: MovieType = await fetch(
    `${import.meta.env.VITE_API_URL}/${title}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return data;
};
