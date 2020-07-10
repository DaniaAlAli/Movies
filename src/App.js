import React from "react";
import { Route, Switch } from "react-router";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

//Data
import movies from "./movies";

//Components
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/movies/:movieSlug">
          <MovieDetail movies={movies} />
        </Route>
        <Route path="/movies">
          <MovieList movies={movies} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
