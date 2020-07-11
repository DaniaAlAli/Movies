import React from "react";

import { ListWrapper } from "../styles";

import RecommendedItem from "./RecommendedItem";

const RecommendationList = ({ movie, movies }) => {
  const recommendationList = movies
    .filter(
      (recommend) => recommend.type === movie.type && recommend.id !== movie.id
    )
    .map((movie) => <RecommendedItem movie={movie} />);

  return (
    <div className="container">
      {" "}
      <ListWrapper className="row">{recommendationList}</ListWrapper>
    </div>
  );
};
export default RecommendationList;
