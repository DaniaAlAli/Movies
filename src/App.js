import React from "react";
import { Route, Switch } from "react-router";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

//Data
import movies from "./movies";

//Components
import Home from "./components/Home";
import MovieList from "./components/MovieList";

function App() {
  return (
    //<Home />
    <>
      <GlobalStyle />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
