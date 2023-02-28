import { useState, useRef } from "react";
import { constants } from "../../constants";
import { fetchMovies } from "../../redux/features/movies/movies";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CustomButton } from "../CustomButton";

interface TitleBoxProps {
  title: string;
  description: string;
}

export function TitleBox({ title, description }: TitleBoxProps) {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movie);

  const searchMovie = () => {
    if (search === "" || search.length < 2) return;
    dispatch(fetchMovies(search));
    setSearch("");
    inputRef.current?.blur();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          marginBottom: "15px",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          width: "70%",
          textAlign: "center",
        }}
      >
        {description}
      </div>

      <form
        style={{
          marginTop: "30px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          searchMovie();
        }}
      >
        <input
          style={{
            width: "35%",
          }}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
        />

        <CustomButton title="Search" onClick={searchMovie} />
        <CustomButton
          title="Reset"
          onClick={() => {
            setSearch("");
            dispatch(fetchMovies(constants.INITIAL_MOVIE));
          }}
        />
      </form>
    </div>
  );
}
