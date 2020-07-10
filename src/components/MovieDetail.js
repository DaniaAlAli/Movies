import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";

//Style
import { DetailWrapper, MovieWrapper, ListWrapper } from "../styles";

const MovieDetail = ({ movies }) => {
  const { movieSlug } = useParams();

  const movie = movies.find((movie) => movie.slug === movieSlug);
  if (!movie) return <Redirect to="/movies" />;

  return (
    <DetailWrapper>
      {/* <Link to="/movies">
        <p>Back to Movies</p>
      </Link> */}
      <h1>{movies.title}</h1>
      <img src={movie.poster} alt={movies.title} />
      <p>{movie.released}</p>
      <p>{movie.plot}</p>
      <p>{movie.runtime}</p>
      <p>{movie.genre}</p>
      <p>Recommended Movies</p>
      <Link to={`/movies/${movie.recommendedSlug}`}>
        <img alt={movie.title} src={movie.recommended} />
      </Link>
      <Link to="/movies">
        <button> Back to Mugs</button>
      </Link>
    </DetailWrapper>
  );
};

export default MovieDetail;
