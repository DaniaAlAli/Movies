import React from "react";

//Style
import { ListWrapper } from "../styles";

const MovieList = ({ movieData }) => {
  const movieList = movieData.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));

  return (
    <div className="container">
      <ListWrapper className="row">{movieList}</ListWrapper>
    </div>
  );
};

export default MovieList;
