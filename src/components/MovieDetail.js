import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";

//Style
import { DetailWrapper, BodyDetail } from "../styles";

const MovieDetail = ({ movies }) => {
  const { movieSlug } = useParams();

  const movie = movies.find((movie) => movie.slug === movieSlug);
  if (!movie) return <Redirect to="/movies" />;

  return (
    <DetailWrapper>
      <h1>{movies.title}</h1>
      <BodyDetail>
        <img src={movie.poster} alt={movies.title} />
        <p style={{ backgroundColor: "#ffcf31" }}>Movie Detail</p>
        <p>Release Date: {movie.released}</p>
        <p>Plot: {movie.plot}</p>
        <p>Run Time: {movie.runtime}</p>
        <p>Genre: {movie.genre}</p>
        <p style={{ backgroundColor: "#ffcf31" }}> Recommended Movies </p>
        <Link to={`/movies/${movie.recommendedSlug}`}>
          <img alt={movie.title} src={movie.recommended} />
        </Link>
      </BodyDetail>
      <Link to="/movies">
        <button> Back to Movies</button>
      </Link>
    </DetailWrapper>
  );
};

export default MovieDetail;
