import React from "react";
import { Link } from "react-router-dom";

//Style
import { MovieWrapper } from "../styles";

const MovieItem = ({ movie }) => {
  return (
    <MovieWrapper className="col-md-2 col-lg-2">
      <img alt={movie.title} src={movie.poster} />
      <p>{movie.title}</p>
    </MovieWrapper>
  );
};

export default MovieItem;
