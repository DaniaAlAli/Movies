import React from "react";
import { Link } from "react-router-dom";

//Style
import { RecommendedWrapper } from "../styles";

const RecommendedItem = ({ movie }) => {
  return (
    <RecommendedWrapper className="col-lg-4 col-md-4 col-sm-6">
      <Link to={`/movies/${movie.slug}`}>
        <img alt={movie.title} src={movie.poster} />{" "}
      </Link>
    </RecommendedWrapper>
  );
};

export default RecommendedItem;
