import React from "react";
import { Route, Switch } from "react-router";

import { GlobalStyle } from "./styles";

//Data
import movies from "./movies";

//Components
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/movies/:movieSlug">
          <NavBar />
          <MovieDetail movies={movies} />
        </Route>
        <Route path="/movies">
          <NavBar />
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
