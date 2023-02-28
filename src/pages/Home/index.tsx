import "./styles.css";
import { useEffect } from "react";
import {
  DynamicSideContent,
  RatingIndicator,
  Page,
  Bar,
  Label,
  BusyIndicator,
} from "@ui5/webcomponents-react";

// Redux
import { fetchMovies } from "../../redux/features/movies/movies";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

// Components
import { Poster } from "../../components/Poster";
import { CustomButton } from "../../components/CustomButton";
import { TitleBox } from "../../components/TitleBox";
import { Legend } from "../../components/Legend";
import { constants } from "../../constants";

export function Home() {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movie);
  const state = useAppSelector((state) => state);

  const convert = (value: number) => {
    return (value * 5) / 100;
  };

  useEffect(() => {
    dispatch(fetchMovies(constants.INITIAL_MOVIE));
  }, []);

  return (
    <div style={{ height: "100vh", width: "60vw", margin: "0 auto" }}>
      <Page
        title="Home"
        header={<Bar design="Header" children={<Label>Header</Label>} />}
        footer={<Bar design="Footer" children={<Label>Footer</Label>} />}
        disableScrolling={true}
      >
        <TitleBox
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate."
        />

        {movie.status === "loading" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <BusyIndicator active size="Large" />
          </div>
        ) : (
          <DynamicSideContent
            className="dynamic-side-content"
            onLayoutChange={function noRefCheck() {}}
            sideContent={
              <div>
                <Poster imageUrl={movie.value.Poster} />
              </div>
            }
          >
            <h1>{movie.value.Title}</h1>
            <p>{movie.value.Plot}</p>

            <Legend title="Actors" node={<>{movie.value.Actors}</>} />

            <Legend
              title="Review"
              node={
                <RatingIndicator
                  value={convert(parseInt(movie.value.Metascore))}
                  readonly
                ></RatingIndicator>
              }
            />

            <div className="favorite-btn">
              <CustomButton title="Favorite" icon="heart" />
            </div>
          </DynamicSideContent>
        )}
      </Page>
    </div>
  );
}
