import React from "react";

//Style
import { TitleWrap, ListWrapper } from "../styles";

//Components
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  const movieList = movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));

  return (
    <div className="container">
      <ListWrapper className="row">{movieList}</ListWrapper>
    </div>
  );
};

export default MovieList;
