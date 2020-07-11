import React, { useState } from "react";

//Style
import { ListWrapper } from "../styles";

//Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

const MovieList = ({ movies }) => {
  const [query, setQuery] = useState("");

  const filteredMovies = movies.filter((movie) => movie.title.includes(query));

  console.log("filteredMovies", filteredMovies);

  const movieList = movies
    .filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{movieList}</ListWrapper>
    </div>
  );
};

export default MovieList;
