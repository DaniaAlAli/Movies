import React from "react";
import { useParams, Redirect } from "react-router-dom";
import ReactPlayer from "react-player";

import RecommendationList from "./RecommendationList";
//Style
import { DetailWrapper, Video } from "../styles";

const MovieDetail = ({ movies }) => {
  const { movieSlug } = useParams();

  const movie = movies.find((movie) => movie.slug === movieSlug);
  if (!movie) return <Redirect to="/movies" />;

  return (
    <DetailWrapper>
      <h1>{movie.title}</h1>
      <img className="main" src={movie.poster} alt={movie.title} />
      <div></div>
      <img className="stars" src={movie.stars} alt={movie.title} />
      <p>
        <span> Rating : </span> {movie.rating} / 5
      </p>
      <p className="rd">
        <span> Released Date : </span>
        {movie.released}
      </p>
      <p>
        {" "}
        <span> Plot : </span>
        {movie.plot}
      </p>
      <p>
        <span> Run Time : </span>
        {movie.runtime}
      </p>
      <p>
        <span> Genre : </span>
        {movie.genre}
      </p>
      <Video>
        <ReactPlayer url={movie.video} />
      </Video>
      <p>
        <span> Recommended Movies : </span>
      </p>
      <RecommendationList movies={movies} movie={movie} />
    </DetailWrapper>
  );
};

export default MovieDetail;
